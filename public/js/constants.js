$.mobile.defaultPageTransition = "win8Flip";

var InteractionModelTypes = {
  'InteractionModelTypeTablet': 0,
  'InteractionModelTypeKinect': 1,
  'InteractionModelTypeCursor': 2,
  'InteractionModelTypeOthers': 3,
};

var InteractionModel = InteractionModelTypes.InteractionModelTypeCursor;

var _lastInteractiveElement = [];

var _spinner = new Image();

var InteractionEventTypes = {
  'InteractionEventTypeGesture': 0,
  'InteractionEventTypeSpeech': 1,
  'InteractionEventTypeCursor': 2
};

var GestureTypes = {
  'GestureTypeSwipe': 0,
  'GestureTypeIntersection': 1,
  'GestureTypeLean': 2,
  'GestureTypeTurn': 3
};

var GestureDirections = {
  'GestureDirectionLeft': 0,
  'GestureDirectionRight': 1,
  'GestureDirectionUp': 2,      // Jump incase of lean gesture
  'GestureDirectionDown': 3     // Crouch incase of lean gesture
};

var JointTypes = {
  'JointTypeHandRight': 0,
  'JointTypeWristRight': 1,
  'JointTypeElbowRight': 2,
  'JointTypeShoulderRight': 3,
  'JointTypeShoulderCenter': 4,
  'JointTypeShoulderLeft': 5,
  'JointTypeElbowLeft': 6,
  'JointTypeWristLeft': 7,
  'JointTypeHandLeft': 8,
  'JointTypeHead': 9,
  'JointTypeSpine': 10,
  'JointTypeHipCenter': 11,
  'JointTypeFootRight': 12,
  'JointTypeAnkelRight': 13,
  'JointTypeKneeRight': 14,
  'JointTypeFootRight': 15,
  'JointTypeHipRight': 16,
  'JointTypeHipLeft': 17,
  'JointTypeKneeLeft': 18,
  'JointTypeAnkleLeft': 19,
  'JointTypeFootLeft': 20
};