import {topics} from './topics'
import {geolocation} from './geolocation'

const Query = {
  hello(parent, args, ctx, info) {
      return "hello"
  }
  , geolocation
  , topics
}

export {Query as default}