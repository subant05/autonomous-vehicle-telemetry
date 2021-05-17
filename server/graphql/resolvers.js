const resolvers = {
  Query: {
      hello(parent, args, ctx, info) {
          return "hello"
      }
  },
  Subscription: {
    deviceMessage: {
      subscribe: (parent, args, ctx, info) =>{ 
        return ctx.pubsub.asyncIterator([ctx.events.DEVICE_MESSAGE])
      },
    }
  }
}


export default resolvers;