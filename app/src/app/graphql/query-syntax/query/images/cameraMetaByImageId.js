import { gql } from 'apollo-angular';

const cameraMeta =gql`query CamerMeta ($imageId:BigInt) {
    images(condition: {id: $imageId}) {
      nodes {
        width
        height
        encoding
        step
        isBigendian
        header {
          stamp {
            sec
            nanosec
          }
          frameId
        }
        cameraMessages {
          nodes {
            header{
                readingat
                headerId
                seq
                node
            }
            cameraMeta {
              cameraName
              leftGain
              rightGain
              leftExposure
              rightExposure
              f {
                data
                id
              }
              leftHistogram {
                fullHistogram {
                  data
                }
                smallHistogram {
                  data
                }
              }
              leftIntrinsics {
                dId
                height
                width
                d {
                  data
                }
                k {
                  data
                }
              }
              e {
                data
              }
              extra
              leftRoi {
                doRectify
                height
                width
                xOffset
                yOffset
              }
              p1 {
                data
              }
              p2 {
                data
              }
              q {
                data
              }
              r1 {
                data
              }
              r2 {
                data
              }
              rightHistogram {
                fullHistogram {
                  data
                }
                smallHistogram {
                  data
                }
              }
              rightIntrinsics {
                dId
                height
                width
                d {
                  data
                }
                k {
                  data
                }
              }
              rightRoi {
                doRectify
                height
                width
                xOffset
                yOffset
              }
              stereoExtrinsics {
                r {
                  data
                }
                rRodrigues {
                  data
                }
                t {
                  data
                }
              }
              serialNumber
              tractorExtrinsics {
                r {
                  data
                }
                rRodrigues {
                  data
                }
                t {
                  data
                }
              }
            }
          }
        }
      }
    }
  }
  `

  export {cameraMeta as default}