import { makeExtendSchemaPlugin, gql, embed } from 'graphile-utils';
let run = false

export const JupiterSubscriptionPlugin = makeExtendSchemaPlugin(({ pgSql: sql }) => ({
    typeDefs: gql`
      type SQLStarfirePayload {
        # (Subscription PAYLOAD Type )Starfire type data retturned on this subscription type resolver below
        starfire(vehicleId:Float): Starfire
        event: String
      }

      type SQLVehiclePayload {
        # (Subscription PAYLOAD Type )vehicle type data retturned on this subscription type resolver below
        vehicle: Vehicle
        event: String
      }
  
      type SQLVehicleStatusPayload {
        # (Subscription PAYLOAD Type )vehicle type data retturned on this subscription type resolver below
        vehicle_status(vehicleId:BigInt): VehicleStatus
        event: String
      }

      type SQLAlertsPayload {
        # (Subscription PAYLOAD Type )vehicle type data returned on this subscription type resolver below
        alerts: Alert
        event: String
      }

      type SQLVehiclesOnlinePayload {
        # (Subscription PAYLOAD Type )vehicle online data returned on this subscription type resolver below
        vehicle_online(vehicleId:BigInt): VehiclesOnline
        row: VehiclesOnline
        event: String
      }
      
      type SQLCameraPayload {
        # (Subscription PAYLOAD Type ) camera data returned on this subscription type resolver below
          camera(vehicleId: BigInt): Camera
          id:BigInt
          event:String
      }
  
      type SQLObjectDetectionPayload {
        # (Subscription PAYLOAD Type ) camera data returned on this subscription type resolver below
          object(vehicleId: BigInt): Object
          event:String
      }

      type SQLVehicleLoggingPayload {
        # (Subscription PAYLOAD Type ) camera data returned on this subscription type resolver below
          vehicle_logs(vehicleId: BigInt): VehicleLog
          event:String
      }


      type SQLMissionStatsPayload {
        # (Subscription PAYLOAD Type ) camera data returned on this subscription type resolver below
          missions(vehicleId: BigInt): Mission
          event:String
      }

      extend type Subscription {
        # (Subscription) will be triggered when the current starfire's data changes
        sqlStarfire: SQLStarfirePayload @pgSubscription(topic: ${embed(
            ()=>`postgraphile:sql_starfire`
        )})
        sqlVehicle: SQLVehiclePayload @pgSubscription(topic: ${embed(
            ()=>`postgraphile:sql_vehicle`
        )})
        sqlVehicleStatus: SQLVehicleStatusPayload @pgSubscription(topic: ${embed(
            ()=>`postgraphile:sql_vehicle_status`
        )})
        sqlAlerts: SQLAlertsPayload @pgSubscription(topic: ${embed(
            ()=>`postgraphile:sql_alerts`
        )})
        sqlVehiclesOnline: SQLVehiclesOnlinePayload @pgSubscription(topic: ${embed(
            ()=>`postgraphile:sql_vehicles_online`
        )})
        sqlCamera: SQLCameraPayload @pgSubscription(topic: ${embed(
            ()=>`postgraphile:sql_camera`
        )})
        sqlObjectDetection: SQLObjectDetectionPayload @pgSubscription(topic: ${embed(
            ()=>`postgraphile:sql_detection_objects`
        )})
        sqlVehicleLogging: SQLVehicleLoggingPayload @pgSubscription(topic: ${embed(
            ()=>`postgraphile:sql_vehicle_logs`
        )})
        sqlMission: SQLMissionStatsPayload @pgSubscription(topic: ${embed(
            ()=>`postgraphile:sql_mission`
        )})
      }
    `,
  
    resolvers: {
        SQLStarfirePayload: {
            // This method finds the starfire from the database based on the event
            // published by PostgreSQL.
            // (Type Resolver)
            async starfire(
                event,
                {vehicleId},
                _context,
                { graphile: { selectGraphQLResultFromTable } }
            ) {
                const rows = await selectGraphQLResultFromTable(
                sql.fragment`geolocation.starfire`,
                (tableAlias, sqlBuilder) => {
                    sqlBuilder.where(
                        sql.fragment`${tableAlias}.id = ${sql.value(event.__node__[0])}`
                    );
                    if(vehicleId)
                        sqlBuilder.where(
                            sql.fragment`${tableAlias}.vehicle_id = ${sql.value(vehicleId)}`
                        );
                }
                );
                return rows[0];
            },


        },
        SQLVehiclePayload: {
        // This method finds the starfire from the database based on the event
        // published by PostgreSQL.
        // (Type Resolver)
            async vehicle(
                event,
                _args,
                _context,
                { graphile: { selectGraphQLResultFromTable } }
            ) {
                const rows = await selectGraphQLResultFromTable(
                sql.fragment`vehicles.vehicles`,
                (tableAlias, sqlBuilder) => {
                    sqlBuilder.where(
                    sql.fragment`${tableAlias}.id = ${sql.value(event.__node__[0])}`
                    );
                }
                );
                return rows[0];
            },
        },
        SQLVehicleStatusPayload: {
            // This method finds the starfire from the database based on the event
            // published by PostgreSQL.
            // (Type Resolver)
            async vehicle_status(
                event,
                {vehicleId},
                _context,
                { graphile: { selectGraphQLResultFromTable } }
            ) {
                const rows = await selectGraphQLResultFromTable(
                sql.fragment`state.vehicle_status`,
                (tableAlias, sqlBuilder) => {
                    sqlBuilder.where(
                        sql.fragment`${tableAlias}.id = ${sql.value(event.__node__[0])}`
                    );
                    if(vehicleId)
                        sqlBuilder.where(
                            sql.fragment`${tableAlias}.vehicle_id = ${sql.value(vehicleId)}`
                        );
                }
                );
                return rows[0];
            },
        },
        SQLAlertsPayload: {
            // This method finds the Alerts from the database based on the event
            // published by PostgreSQL.
            // (Type Resolver)
            async alerts(
                event,
                _args,
                _context,
                { graphile: { selectGraphQLResultFromTable } }
            ) {
                const rows = await selectGraphQLResultFromTable(
                sql.fragment`notifications.alerts`,
                (tableAlias, sqlBuilder) => {
                    sqlBuilder.where(
                    sql.fragment`${tableAlias}.id = ${sql.value(event.__node__[0])}`
                    );
                }
                );
                return rows[0];
            },
        },
        SQLVehiclesOnlinePayload: {
            // This method finds the Vehicle Logs from the database based on the event
            // published by PostgreSQL.
            // (Type Resolver)
            async vehicle_online(
                event,
                {vehicleId},
                _context,
                { graphile: { selectGraphQLResultFromTable } }
            ) {
                const rows = await selectGraphQLResultFromTable(
                    sql.fragment`vehicles.vehicles_online`,
                    (tableAlias, sqlBuilder) => {
                        sqlBuilder.where(
                            sql.fragment`${tableAlias}.id = ${sql.value(event.__node__[0])}`
                        );
                        if(vehicleId)
                            sqlBuilder.where(
                                sql.fragment`${tableAlias}.vehicle_id = ${sql.value(vehicleId)}`
                            );
                    }
                );

                return rows[0];
            },
        },
        SQLCameraPayload: {
            // This method finds the Vehicle Logs from the database based on the event
            // published by PostgreSQL.
            // (Type Resolver)
            async camera(
                event,
                {vehicleId},
                _context,
                { graphile: { selectGraphQLResultFromTable } }
            ) {
                const rows = await selectGraphQLResultFromTable(
                    sql.fragment`images.camera`,
                    (tableAlias, sqlBuilder) => {
                        sqlBuilder.where(
                            sql.fragment`${tableAlias}.id = ${sql.value(event.__node__[0])}`
                        );
                        if(vehicleId)
                            sqlBuilder.where(
                                sql.fragment`${tableAlias}.vehicle_id = ${sql.value(vehicleId)}`
                            );
                    }
                );

                return rows[0];
            },
        },
        SQLObjectDetectionPayload: {
            // This method finds the Vehicle Logs from the database based on the event
            // published by PostgreSQL.
            // (Type Resolver)
            async object(
                event,
                {vehicleId},
                _context,
                { graphile: { selectGraphQLResultFromTable } }
            ) {
                const rows = await selectGraphQLResultFromTable(
                    sql.fragment`detection.objects`,
                    (tableAlias, sqlBuilder) => {
                        sqlBuilder.where(
                            sql.fragment`${tableAlias}.id = ${sql.value(event.__node__[0])}`
                        );
                        if(vehicleId)
                            sqlBuilder.where(
                                sql.fragment`${tableAlias}.vehicle_id = ${sql.value(vehicleId)}`
                            );
                    }
                );

                return rows[0];
            },
        },
        SQLVehicleLoggingPayload: {
            // This method finds the Vehicle Logs from the database based on the event
            // published by PostgreSQL.
            // (Type Resolver)
            async vehicle_logs(
                event,
                {vehicleId},
                _context,
                { graphile: { selectGraphQLResultFromTable } }
            ) {
                const rows = await selectGraphQLResultFromTable(
                    sql.fragment`logging.vehicle_logs`,
                    (tableAlias, sqlBuilder) => {
                        sqlBuilder.where(
                            sql.fragment`${tableAlias}.id = ${sql.value(event.__node__[0])}`
                        );
                        if(vehicleId)
                            sqlBuilder.where(
                                sql.fragment`${tableAlias}.vehicle_id = ${sql.value(vehicleId)}`
                            );
                    }
                );

                return rows[0];
            },
        },

        SQLMissionStatsPayload: {
            // This method finds the Vehicle Logs from the database based on the event
            // published by PostgreSQL.
            // (Type Resolver)
            async missions(
                event,
                {vehicleId},
                _context,
                { graphile: { selectGraphQLResultFromTable } }
            ) {
                const rows = await selectGraphQLResultFromTable(
                    sql.fragment`production.missions`,
                    (tableAlias, sqlBuilder) => {
                        sqlBuilder.where(
                            sql.fragment`${tableAlias}.id = ${sql.value(event.__node__[0])}`
                        );
                        // sqlBuilder.where(
                        //     sql.fragment`${tableAlias}.mission_start_time > '1971-01-01'`
                        // );
                        if(vehicleId)
                            sqlBuilder.where(
                                sql.fragment`${tableAlias}.vehicle_id = ${sql.value(vehicleId)}`
                            );
                    }
                );

                return rows[0];
            },
        },
    },
  }));