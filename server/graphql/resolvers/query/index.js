import {topics} from './topics'
import {geolocation} from './geolocation'
import {imagePair, segmentationMap} from './images'

const Query = {
  hello(parent, args, ctx, info) {
      return "hello"
  }
  , geolocation
  , topics
  , imagePair
  , segmentationMap
}

export {Query as default}