import { makeExtendSchemaPlugin, gql, embed } from 'graphile-utils';

export const JupiterSubscriptionPlugin = makeExtendSchemaPlugin(({ pgSql: sql }) => ({
    typeDefs: gql`
      type SQLStarfirePayload {
        # (Subscription PAYLOAD Type )Starfire type data retturned on this subscription type resolver below
        starfire: Starfire
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
      }
    `,
  
    resolvers: {
        SQLStarfirePayload: {
            // This method finds the starfire from the database based on the event
            // published by PostgreSQL.
            // (Type Resolver)
            async starfire(
                event,
                _args,
                _context,
                { graphile: { selectGraphQLResultFromTable } }
            ) {
                console.log("---- :EVENT: ----", event)
                const rows = await selectGraphQLResultFromTable(
                sql.fragment`geolocation.starfire`,
                (tableAlias, sqlBuilder) => {
                    sqlBuilder.where(
                    sql.fragment`${tableAlias}.id = ${sql.value(event.__node__[0])}`
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
                sql.fragment`vehicles.vehicle_status`,
                (tableAlias, sqlBuilder) => {
                    sqlBuilder.where(
                    sql.fragment`${tableAlias}.id = ${sql.value(event.__node__[0])}`
                    );
                }
                );
                return rows[0];
            },
        },
    },
  }));