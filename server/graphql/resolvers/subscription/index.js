const Subscription = {
  deviceMessage: {
    subscribe: (parent, args, ctx, info) =>{ 
      console.log(ctx)
      return ctx.pubsub.asyncIterator([ctx.events.Subscriptions.DEVICE_MESSAGE])
    },
  },
  geographicCoordinates: {
    subscribe:(parent, args, ctx, info) =>{
      return ctx.pubsub.asyncIterator([ctx.events.Subscriptions.DEVICE_COORDINATES])
    }
  },
  onlineDevices: {
    subscribe:(parent, args, ctx, info)=>{
      return ctx.pubsub.asyncIterator([ctx.events.Subscriptions.ONLINE_DEVICES])
    }
  }
}

export { Subscription as default}