const Subscription = {
  deviceMessage: {
    subscribe: (parent, args, ctx, info) =>{ 
      console.log(ctx.pubsub)
      return ctx.pubsub.asyncIterator([ctx.events.DEVICE_MESSAGE])
    },
  }
}

export { Subscription as default}