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
        vehicle_status: VehicleStatus
        event: String
      }

      type SQLAlertsPayload {
        # (Subscription PAYLOAD Type )vehicle type data returned on this subscription type resolver below
        alerts: Alert
        event: String
      }

      type SQLVehicleLogsPayload {
        # (Subscription PAYLOAD Type )vehicle log data returned on this subscription type resolver below
        log: VehicleLog
        event: String
      }

      type SQLVehiclesOnlinePayload {
        # (Subscription PAYLOAD Type )vehicle online data returned on this subscription type resolver below
        vehicle_online(vehicleId:BigInt): VehiclesOnline
        row: VehiclesOnline
        event: String
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
        sqlVehicleLogs: SQLVehicleLogsPayload @pgSubscription(topic: ${embed(
            ()=>`postgraphile:sql_vehicle_logs`
        )})
        sqlVehiclesOnline: SQLVehiclesOnlinePayload @pgSubscription(topic: ${embed(
            ()=>`postgraphile:sql_vehicles_online`
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
                _args,
                _context,
                { graphile: { selectGraphQLResultFromTable } }
            ) {
                const rows = await selectGraphQLResultFromTable(
                sql.fragment`state.vehicle_status`,
                (tableAlias, sqlBuilder) => {
                    sqlBuilder.where(
                    sql.fragment`${tableAlias}.id = ${sql.value(event.__node__[0])}`
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
        SQLVehicleLogsPayload: {
            // This method finds the Vehicle Logs from the database based on the event
            // published by PostgreSQL.
            // (Type Resolver)
            async log(
                event,
                _args,
                _context,
                { graphile: { selectGraphQLResultFromTable } }
            ) {
                const rows = await selectGraphQLResultFromTable(
                sql.fragment`state.vehicle_logs`,
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
    },
  }));