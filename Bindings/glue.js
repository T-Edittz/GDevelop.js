
// Bindings utilities

function WrapperObject() {
}
WrapperObject.prototype = Object.create(WrapperObject.prototype);
WrapperObject.prototype.constructor = WrapperObject;
WrapperObject.prototype.__class__ = WrapperObject;
WrapperObject.__cache__ = {};
Module['WrapperObject'] = WrapperObject;

function getCache(__class__) {
  return (__class__ || WrapperObject).__cache__;
}
Module['getCache'] = getCache;

function wrapPointer(ptr, __class__) {
  var cache = getCache(__class__);
  var ret = cache[ptr];
  if (ret) return ret;
  ret = Object.create((__class__ || WrapperObject).prototype);
  ret.ptr = ptr;
  return cache[ptr] = ret;
}
Module['wrapPointer'] = wrapPointer;

function castObject(obj, __class__) {
  return wrapPointer(obj.ptr, __class__);
}
Module['castObject'] = castObject;

Module['NULL'] = wrapPointer(0);

function destroy(obj) {
  if (!obj['__destroy__']) throw 'Error: Cannot destroy object. (Did you create it yourself?)';
  obj['__destroy__']();
  // Remove from cache, so the object can be GC'd and refs added onto it released
  delete getCache(obj.__class__)[obj.ptr];
}
Module['destroy'] = destroy;

function compare(obj1, obj2) {
  return obj1.ptr === obj2.ptr;
}
Module['compare'] = compare;

function getPointer(obj) {
  return obj.ptr;
}
Module['getPointer'] = getPointer;

function getClass(obj) {
  return obj.__class__;
}
Module['getClass'] = getClass;

// Converts a value into a C-style string.
function ensureString(value) {
  if (typeof value == 'string') return allocate(intArrayFromString(value), 'i8', ALLOC_STACK);
  return value;
}


// ArbitraryResourceWorker
function ArbitraryResourceWorker() { throw "cannot construct a ArbitraryResourceWorker, no constructor in IDL" }
ArbitraryResourceWorker.prototype = Object.create(WrapperObject.prototype);
ArbitraryResourceWorker.prototype.constructor = ArbitraryResourceWorker;
ArbitraryResourceWorker.prototype.__class__ = ArbitraryResourceWorker;
ArbitraryResourceWorker.__cache__ = {};
Module['ArbitraryResourceWorker'] = ArbitraryResourceWorker;

  ArbitraryResourceWorker.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ArbitraryResourceWorker___destroy___0(self);
};
// Layout
function Layout() { throw "cannot construct a Layout, no constructor in IDL" }
Layout.prototype = Object.create(WrapperObject.prototype);
Layout.prototype.constructor = Layout;
Layout.prototype.__class__ = Layout;
Layout.__cache__ = {};
Module['Layout'] = Layout;

Layout.prototype['SetName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Layout_SetName_1(self, arg0);
};;

Layout.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Layout_GetName_0(self));
};;

Layout.prototype['SetBackgroundColor'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  _emscripten_bind_Layout_SetBackgroundColor_3(self, arg0, arg1, arg2);
};;

Layout.prototype['GetBackgroundColorRed'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Layout_GetBackgroundColorRed_0(self);
};;

Layout.prototype['GetBackgroundColorGreen'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Layout_GetBackgroundColorGreen_0(self);
};;

Layout.prototype['GetBackgroundColorBlue'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Layout_GetBackgroundColorBlue_0(self);
};;

Layout.prototype['SetWindowDefaultTitle'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Layout_SetWindowDefaultTitle_1(self, arg0);
};;

Layout.prototype['GetWindowDefaultTitle'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Layout_GetWindowDefaultTitle_0(self));
};;

Layout.prototype['GetInitialInstances'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Layout_GetInitialInstances_0(self), InitialInstancesContainer);
};;

Layout.prototype['GetVariables'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Layout_GetVariables_0(self), VariablesContainer);
};;

Layout.prototype['GetEvents'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Layout_GetEvents_0(self), EventsList);
};;

Layout.prototype['InsertNewLayer'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_Layout_InsertNewLayer_2(self, arg0, arg1);
};;

Layout.prototype['InsertLayer'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_Layout_InsertLayer_2(self, arg0, arg1);
};;

Layout.prototype['GetLayer'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_GetLayer_1(self, arg0), Layer);
};;

Layout.prototype['GetLayerAt'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_GetLayerAt_1(self, arg0), Layer);
};;

Layout.prototype['HasLayerNamed'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_Layout_HasLayerNamed_1(self, arg0));
};;

Layout.prototype['RemoveLayer'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Layout_RemoveLayer_1(self, arg0);
};;

Layout.prototype['GetLayersCount'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Layout_GetLayersCount_0(self);
};;

Layout.prototype['InsertNewObject'] = function(arg0, arg1, arg2, arg3) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  if (arg3 && typeof arg3 === 'object') arg3 = arg3.ptr;
  else arg3 = ensureString(arg3);
  return wrapPointer(_emscripten_bind_Layout_InsertNewObject_4(self, arg0, arg1, arg2, arg3), gdObject);
};;

Layout.prototype['InsertObject'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return wrapPointer(_emscripten_bind_Layout_InsertObject_2(self, arg0, arg1), gdObject);
};;

Layout.prototype['HasObjectNamed'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_Layout_HasObjectNamed_1(self, arg0));
};;

Layout.prototype['GetObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_GetObject_1(self, arg0), gdObject);
};;

Layout.prototype['GetObjectAt'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_GetObjectAt_1(self, arg0), gdObject);
};;

Layout.prototype['GetObjectPosition'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Layout_GetObjectPosition_1(self, arg0);
};;

Layout.prototype['RemoveObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Layout_RemoveObject_1(self, arg0);
};;

Layout.prototype['SwapObjects'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_Layout_SwapObjects_2(self, arg0, arg1);
};;

Layout.prototype['GetObjectsCount'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Layout_GetObjectsCount_0(self);
};;

  Layout.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Layout___destroy___0(self);
};
// MapStringEventMetadata
function MapStringEventMetadata() { throw "cannot construct a MapStringEventMetadata, no constructor in IDL" }
MapStringEventMetadata.prototype = Object.create(WrapperObject.prototype);
MapStringEventMetadata.prototype.constructor = MapStringEventMetadata;
MapStringEventMetadata.prototype.__class__ = MapStringEventMetadata;
MapStringEventMetadata.__cache__ = {};
Module['MapStringEventMetadata'] = MapStringEventMetadata;

MapStringEventMetadata.prototype['MAP_get'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_MapStringEventMetadata_MAP_get_1(self, arg0), EventMetadata);
};;

MapStringEventMetadata.prototype['MAP_set'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_MapStringEventMetadata_MAP_set_2(self, arg0, arg1);
};;

MapStringEventMetadata.prototype['MAP_has'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_MapStringEventMetadata_MAP_has_1(self, arg0));
};;

MapStringEventMetadata.prototype['MAP_keys'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_MapStringEventMetadata_MAP_keys_0(self), VectorString);
};;

  MapStringEventMetadata.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_MapStringEventMetadata___destroy___0(self);
};
// Vector2f
function Vector2f() {
  this.ptr = _emscripten_bind_Vector2f_Vector2f_0();
  getCache(Vector2f)[this.ptr] = this;
};;
Vector2f.prototype = Object.create(WrapperObject.prototype);
Vector2f.prototype.constructor = Vector2f;
Vector2f.prototype.__class__ = Vector2f;
Vector2f.__cache__ = {};
Module['Vector2f'] = Vector2f;

  Vector2f.prototype['get_x']= function() {
  var self = this.ptr;
  return _emscripten_bind_Vector2f_get_x_0(self);
};
    Vector2f.prototype['set_x']= function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Vector2f_set_x_1(self, arg0);
};
  Vector2f.prototype['get_y']= function() {
  var self = this.ptr;
  return _emscripten_bind_Vector2f_get_y_0(self);
};
    Vector2f.prototype['set_y']= function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Vector2f_set_y_1(self, arg0);
};
  Vector2f.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Vector2f___destroy___0(self);
};
// EventsRefactorer
function EventsRefactorer() { throw "cannot construct a EventsRefactorer, no constructor in IDL" }
EventsRefactorer.prototype = Object.create(WrapperObject.prototype);
EventsRefactorer.prototype.constructor = EventsRefactorer;
EventsRefactorer.prototype.__class__ = EventsRefactorer;
EventsRefactorer.__cache__ = {};
Module['EventsRefactorer'] = EventsRefactorer;

EventsRefactorer.prototype['STATIC_RenameObjectInEvents'] = function(arg0, arg1, arg2, arg3, arg4, arg5) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  if (arg3 && typeof arg3 === 'object') arg3 = arg3.ptr;
  else arg3 = ensureString(arg3);
  if (arg4 && typeof arg4 === 'object') arg4 = arg4.ptr;
  else arg4 = ensureString(arg4);
  if (arg5 && typeof arg5 === 'object') arg5 = arg5.ptr;
  else arg5 = ensureString(arg5);
  _emscripten_bind_EventsRefactorer_STATIC_RenameObjectInEvents_6(self, arg0, arg1, arg2, arg3, arg4, arg5);
};;

EventsRefactorer.prototype['STATIC_RemoveObjectInEvents'] = function(arg0, arg1, arg2, arg3, arg4) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  if (arg3 && typeof arg3 === 'object') arg3 = arg3.ptr;
  else arg3 = ensureString(arg3);
  if (arg4 && typeof arg4 === 'object') arg4 = arg4.ptr;
  else arg4 = ensureString(arg4);
  _emscripten_bind_EventsRefactorer_STATIC_RemoveObjectInEvents_5(self, arg0, arg1, arg2, arg3, arg4);
};;

EventsRefactorer.prototype['STATIC_ReplaceStringInEvents'] = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  if (arg3 && typeof arg3 === 'object') arg3 = arg3.ptr;
  else arg3 = ensureString(arg3);
  if (arg4 && typeof arg4 === 'object') arg4 = arg4.ptr;
  else arg4 = ensureString(arg4);
  if (arg5 && typeof arg5 === 'object') arg5 = arg5.ptr;
  else arg5 = ensureString(arg5);
  if (arg6 && typeof arg6 === 'object') arg6 = arg6.ptr;
  else arg6 = ensureString(arg6);
  if (arg7 && typeof arg7 === 'object') arg7 = arg7.ptr;
  else arg7 = ensureString(arg7);
  _emscripten_bind_EventsRefactorer_STATIC_ReplaceStringInEvents_8(self, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
};;

  EventsRefactorer.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_EventsRefactorer___destroy___0(self);
};
// InitialInstanceJSFunctorWrapper
function InitialInstanceJSFunctorWrapper() { throw "cannot construct a InitialInstanceJSFunctorWrapper, no constructor in IDL" }
InitialInstanceJSFunctorWrapper.prototype = Object.create(WrapperObject.prototype);
InitialInstanceJSFunctorWrapper.prototype.constructor = InitialInstanceJSFunctorWrapper;
InitialInstanceJSFunctorWrapper.prototype.__class__ = InitialInstanceJSFunctorWrapper;
InitialInstanceJSFunctorWrapper.__cache__ = {};
Module['InitialInstanceJSFunctorWrapper'] = InitialInstanceJSFunctorWrapper;

  InitialInstanceJSFunctorWrapper.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_InitialInstanceJSFunctorWrapper___destroy___0(self);
};
// WhileEvent
function WhileEvent() {
  this.ptr = _emscripten_bind_WhileEvent_WhileEvent_0();
  getCache(WhileEvent)[this.ptr] = this;
};;
WhileEvent.prototype = Object.create(WrapperObject.prototype);
WhileEvent.prototype.constructor = WhileEvent;
WhileEvent.prototype.__class__ = WhileEvent;
WhileEvent.__cache__ = {};
Module['WhileEvent'] = WhileEvent;

WhileEvent.prototype['GetConditions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_WhileEvent_GetConditions_0(self), InstructionsList);
};;

WhileEvent.prototype['GetWhileConditions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_WhileEvent_GetWhileConditions_0(self), InstructionsList);
};;

WhileEvent.prototype['GetActions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_WhileEvent_GetActions_0(self), InstructionsList);
};;

WhileEvent.prototype['Clone'] = function() {
  var self = this.ptr;
  _emscripten_bind_WhileEvent_Clone_0(self);
};;

WhileEvent.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_WhileEvent_GetType_0(self));
};;

WhileEvent.prototype['SetType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_WhileEvent_SetType_1(self, arg0);
};;

WhileEvent.prototype['IsExecutable'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_WhileEvent_IsExecutable_0(self));
};;

WhileEvent.prototype['CanHaveSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_WhileEvent_CanHaveSubEvents_0(self));
};;

WhileEvent.prototype['HasSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_WhileEvent_HasSubEvents_0(self));
};;

WhileEvent.prototype['GetSubEvents'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_WhileEvent_GetSubEvents_0(self), EventsList);
};;

WhileEvent.prototype['IsDisabled'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_WhileEvent_IsDisabled_0(self));
};;

WhileEvent.prototype['SetDisabled'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_WhileEvent_SetDisabled_1(self, arg0);
};;

WhileEvent.prototype['IsFolded'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_WhileEvent_IsFolded_0(self));
};;

WhileEvent.prototype['SetFolded'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_WhileEvent_SetFolded_1(self, arg0);
};;

  WhileEvent.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_WhileEvent___destroy___0(self);
};
// Platform
function Platform() { throw "cannot construct a Platform, no constructor in IDL" }
Platform.prototype = Object.create(WrapperObject.prototype);
Platform.prototype.constructor = Platform;
Platform.prototype.__class__ = Platform;
Platform.__cache__ = {};
Module['Platform'] = Platform;

Platform.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Platform_GetName_0(self));
};;

Platform.prototype['GetFullName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Platform_GetFullName_0(self));
};;

Platform.prototype['GetSubtitle'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Platform_GetSubtitle_0(self));
};;

Platform.prototype['GetDescription'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Platform_GetDescription_0(self));
};;

Platform.prototype['IsExtensionLoaded'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_Platform_IsExtensionLoaded_1(self, arg0));
};;

Platform.prototype['GetAllPlatformExtensions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Platform_GetAllPlatformExtensions_0(self), VectorPlatformExtension);
};;

  Platform.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Platform___destroy___0(self);
};
// ProjectHelper
function ProjectHelper() { throw "cannot construct a ProjectHelper, no constructor in IDL" }
ProjectHelper.prototype = Object.create(WrapperObject.prototype);
ProjectHelper.prototype.constructor = ProjectHelper;
ProjectHelper.prototype.__class__ = ProjectHelper;
ProjectHelper.__cache__ = {};
Module['ProjectHelper'] = ProjectHelper;

ProjectHelper.prototype['STATIC_CreateNewGDJSProject'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ProjectHelper_STATIC_CreateNewGDJSProject_0(self), Project);
};;

ProjectHelper.prototype['STATIC_InitializePlatforms'] = function() {
  var self = this.ptr;
  _emscripten_bind_ProjectHelper_STATIC_InitializePlatforms_0(self);
};;

  ProjectHelper.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ProjectHelper___destroy___0(self);
};
// Animation
function Animation() {
  this.ptr = _emscripten_bind_Animation_Animation_0();
  getCache(Animation)[this.ptr] = this;
};;
Animation.prototype = Object.create(WrapperObject.prototype);
Animation.prototype.constructor = Animation;
Animation.prototype.__class__ = Animation;
Animation.__cache__ = {};
Module['Animation'] = Animation;

Animation.prototype['SetDirectionsCount'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Animation_SetDirectionsCount_1(self, arg0);
};;

Animation.prototype['GetDirectionsCount'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Animation_GetDirectionsCount_0(self);
};;

Animation.prototype['GetDirection'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Animation_GetDirection_1(self, arg0), Direction);
};;

Animation.prototype['SetDirection'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_Animation_SetDirection_2(self, arg0, arg1);
};;

Animation.prototype['HasNoDirections'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Animation_HasNoDirections_0(self));
};;

  Animation.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Animation___destroy___0(self);
};
// VariablesContainer
function VariablesContainer() {
  this.ptr = _emscripten_bind_VariablesContainer_VariablesContainer_0();
  getCache(VariablesContainer)[this.ptr] = this;
};;
VariablesContainer.prototype = Object.create(WrapperObject.prototype);
VariablesContainer.prototype.constructor = VariablesContainer;
VariablesContainer.prototype.__class__ = VariablesContainer;
VariablesContainer.__cache__ = {};
Module['VariablesContainer'] = VariablesContainer;

VariablesContainer.prototype['Has'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_VariablesContainer_Has_1(self, arg0));
};;

VariablesContainer.prototype['Get'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_VariablesContainer_Get_1(self, arg0), Variable);
};;

VariablesContainer.prototype['GetAt'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_VariablesContainer_GetAt_1(self, arg0), PairStringVariable);
};;

VariablesContainer.prototype['Insert'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return wrapPointer(_emscripten_bind_VariablesContainer_Insert_3(self, arg0, arg1, arg2), Variable);
};;

VariablesContainer.prototype['InsertNew'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return wrapPointer(_emscripten_bind_VariablesContainer_InsertNew_2(self, arg0, arg1), Variable);
};;

VariablesContainer.prototype['Remove'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_VariablesContainer_Remove_1(self, arg0);
};;

VariablesContainer.prototype['Rename'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_VariablesContainer_Rename_2(self, arg0, arg1);
};;

VariablesContainer.prototype['Swap'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_VariablesContainer_Swap_2(self, arg0, arg1);
};;

VariablesContainer.prototype['GetPosition'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_VariablesContainer_GetPosition_1(self, arg0);
};;

VariablesContainer.prototype['Count'] = function() {
  var self = this.ptr;
  return _emscripten_bind_VariablesContainer_Count_0(self);
};;

VariablesContainer.prototype['Clear'] = function() {
  var self = this.ptr;
  _emscripten_bind_VariablesContainer_Clear_0(self);
};;

  VariablesContainer.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_VariablesContainer___destroy___0(self);
};
// VectorPlatformExtension
function VectorPlatformExtension() { throw "cannot construct a VectorPlatformExtension, no constructor in IDL" }
VectorPlatformExtension.prototype = Object.create(WrapperObject.prototype);
VectorPlatformExtension.prototype.constructor = VectorPlatformExtension;
VectorPlatformExtension.prototype.__class__ = VectorPlatformExtension;
VectorPlatformExtension.__cache__ = {};
Module['VectorPlatformExtension'] = VectorPlatformExtension;

VectorPlatformExtension.prototype['size'] = function() {
  var self = this.ptr;
  return _emscripten_bind_VectorPlatformExtension_size_0(self);
};;

VectorPlatformExtension.prototype['WRAPPED_at'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_VectorPlatformExtension_WRAPPED_at_1(self, arg0), PlatformExtension);
};;

  VectorPlatformExtension.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_VectorPlatformExtension___destroy___0(self);
};
// Resource
function Resource() {
  this.ptr = _emscripten_bind_Resource_Resource_0();
  getCache(Resource)[this.ptr] = this;
};;
Resource.prototype = Object.create(WrapperObject.prototype);
Resource.prototype.constructor = Resource;
Resource.prototype.__class__ = Resource;
Resource.__cache__ = {};
Module['Resource'] = Resource;

Resource.prototype['Clone'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Resource_Clone_0(self), Resource);
};;

Resource.prototype['SetName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Resource_SetName_1(self, arg0);
};;

Resource.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Resource_GetName_0(self));
};;

Resource.prototype['SetKind'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Resource_SetKind_1(self, arg0);
};;

Resource.prototype['GetKind'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Resource_GetKind_0(self));
};;

Resource.prototype['IsUserAdded'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Resource_IsUserAdded_0(self));
};;

Resource.prototype['SetUserAdded'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Resource_SetUserAdded_1(self, arg0);
};;

Resource.prototype['UseFile'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Resource_UseFile_0(self));
};;

Resource.prototype['SetFile'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Resource_SetFile_1(self, arg0);
};;

Resource.prototype['GetFile'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Resource_GetFile_0(self));
};;

Resource.prototype['GetAbsoluteFile'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return Pointer_stringify(_emscripten_bind_Resource_GetAbsoluteFile_1(self, arg0));
};;

Resource.prototype['SerializeTo'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Resource_SerializeTo_1(self, arg0);
};;

Resource.prototype['UnserializeFrom'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Resource_UnserializeFrom_1(self, arg0);
};;

  Resource.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Resource___destroy___0(self);
};
// ForEachEvent
function ForEachEvent() {
  this.ptr = _emscripten_bind_ForEachEvent_ForEachEvent_0();
  getCache(ForEachEvent)[this.ptr] = this;
};;
ForEachEvent.prototype = Object.create(WrapperObject.prototype);
ForEachEvent.prototype.constructor = ForEachEvent;
ForEachEvent.prototype.__class__ = ForEachEvent;
ForEachEvent.__cache__ = {};
Module['ForEachEvent'] = ForEachEvent;

ForEachEvent.prototype['SetObjectToPick'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ForEachEvent_SetObjectToPick_1(self, arg0);
};;

ForEachEvent.prototype['GetObjectToPick'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ForEachEvent_GetObjectToPick_0(self));
};;

ForEachEvent.prototype['GetConditions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ForEachEvent_GetConditions_0(self), InstructionsList);
};;

ForEachEvent.prototype['GetActions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ForEachEvent_GetActions_0(self), InstructionsList);
};;

ForEachEvent.prototype['Clone'] = function() {
  var self = this.ptr;
  _emscripten_bind_ForEachEvent_Clone_0(self);
};;

ForEachEvent.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ForEachEvent_GetType_0(self));
};;

ForEachEvent.prototype['SetType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ForEachEvent_SetType_1(self, arg0);
};;

ForEachEvent.prototype['IsExecutable'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ForEachEvent_IsExecutable_0(self));
};;

ForEachEvent.prototype['CanHaveSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ForEachEvent_CanHaveSubEvents_0(self));
};;

ForEachEvent.prototype['HasSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ForEachEvent_HasSubEvents_0(self));
};;

ForEachEvent.prototype['GetSubEvents'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ForEachEvent_GetSubEvents_0(self), EventsList);
};;

ForEachEvent.prototype['IsDisabled'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ForEachEvent_IsDisabled_0(self));
};;

ForEachEvent.prototype['SetDisabled'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ForEachEvent_SetDisabled_1(self, arg0);
};;

ForEachEvent.prototype['IsFolded'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ForEachEvent_IsFolded_0(self));
};;

ForEachEvent.prototype['SetFolded'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ForEachEvent_SetFolded_1(self, arg0);
};;

  ForEachEvent.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ForEachEvent___destroy___0(self);
};
// VoidPtr
function VoidPtr() { throw "cannot construct a VoidPtr, no constructor in IDL" }
VoidPtr.prototype = Object.create(WrapperObject.prototype);
VoidPtr.prototype.constructor = VoidPtr;
VoidPtr.prototype.__class__ = VoidPtr;
VoidPtr.__cache__ = {};
Module['VoidPtr'] = VoidPtr;

  VoidPtr.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_VoidPtr___destroy___0(self);
};
// MapStringPropertyDescriptor
function MapStringPropertyDescriptor() { throw "cannot construct a MapStringPropertyDescriptor, no constructor in IDL" }
MapStringPropertyDescriptor.prototype = Object.create(WrapperObject.prototype);
MapStringPropertyDescriptor.prototype.constructor = MapStringPropertyDescriptor;
MapStringPropertyDescriptor.prototype.__class__ = MapStringPropertyDescriptor;
MapStringPropertyDescriptor.__cache__ = {};
Module['MapStringPropertyDescriptor'] = MapStringPropertyDescriptor;

MapStringPropertyDescriptor.prototype['MAP_get'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_MapStringPropertyDescriptor_MAP_get_1(self, arg0), PropertyDescriptor);
};;

MapStringPropertyDescriptor.prototype['MAP_set'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_MapStringPropertyDescriptor_MAP_set_2(self, arg0, arg1);
};;

MapStringPropertyDescriptor.prototype['MAP_has'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_MapStringPropertyDescriptor_MAP_has_1(self, arg0));
};;

MapStringPropertyDescriptor.prototype['MAP_keys'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_MapStringPropertyDescriptor_MAP_keys_0(self), VectorString);
};;

  MapStringPropertyDescriptor.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_MapStringPropertyDescriptor___destroy___0(self);
};
// SpriteObject
function SpriteObject(arg0) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  this.ptr = _emscripten_bind_SpriteObject_SpriteObject_1(arg0);
  getCache(SpriteObject)[this.ptr] = this;
};;
SpriteObject.prototype = Object.create(WrapperObject.prototype);
SpriteObject.prototype.constructor = SpriteObject;
SpriteObject.prototype.__class__ = SpriteObject;
SpriteObject.__cache__ = {};
Module['SpriteObject'] = SpriteObject;

SpriteObject.prototype['AddAnimation'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_SpriteObject_AddAnimation_1(self, arg0);
};;

SpriteObject.prototype['GetAnimation'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_SpriteObject_GetAnimation_1(self, arg0), Animation);
};;

SpriteObject.prototype['GetAnimationsCount'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SpriteObject_GetAnimationsCount_0(self);
};;

SpriteObject.prototype['RemoveAnimation'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_SpriteObject_RemoveAnimation_1(self, arg0);
};;

SpriteObject.prototype['RemoveAllAnimations'] = function() {
  var self = this.ptr;
  _emscripten_bind_SpriteObject_RemoveAllAnimations_0(self);
};;

SpriteObject.prototype['HasNoAnimations'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_SpriteObject_HasNoAnimations_0(self));
};;

SpriteObject.prototype['SwapAnimations'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_SpriteObject_SwapAnimations_2(self, arg0, arg1);
};;

SpriteObject.prototype['Clone'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_SpriteObject_Clone_0(self), gdObject);
};;

SpriteObject.prototype['SetName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_SpriteObject_SetName_1(self, arg0);
};;

SpriteObject.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_SpriteObject_GetName_0(self));
};;

SpriteObject.prototype['SetType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_SpriteObject_SetType_1(self, arg0);
};;

SpriteObject.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_SpriteObject_GetType_0(self));
};;

SpriteObject.prototype['GetVariables'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_SpriteObject_GetVariables_0(self), VariablesContainer);
};;

SpriteObject.prototype['GetAllAutomatismNames'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_SpriteObject_GetAllAutomatismNames_0(self), VectorString);
};;

SpriteObject.prototype['HasAutomatismNamed'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_SpriteObject_HasAutomatismNamed_1(self, arg0));
};;

SpriteObject.prototype['AddNewAutomatism'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return wrapPointer(_emscripten_bind_SpriteObject_AddNewAutomatism_3(self, arg0, arg1, arg2), Automatism);
};;

SpriteObject.prototype['GetAutomatism'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_SpriteObject_GetAutomatism_1(self, arg0), Automatism);
};;

SpriteObject.prototype['RemoveAutomatism'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_SpriteObject_RemoveAutomatism_1(self, arg0);
};;

SpriteObject.prototype['RenameAutomatism'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return !!(_emscripten_bind_SpriteObject_RenameAutomatism_2(self, arg0, arg1));
};;

SpriteObject.prototype['SerializeTo'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_SpriteObject_SerializeTo_1(self, arg0);
};;

SpriteObject.prototype['UnserializeFrom'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_SpriteObject_UnserializeFrom_2(self, arg0, arg1);
};;

  SpriteObject.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_SpriteObject___destroy___0(self);
};
// ObjectGroup
function ObjectGroup() {
  this.ptr = _emscripten_bind_ObjectGroup_ObjectGroup_0();
  getCache(ObjectGroup)[this.ptr] = this;
};;
ObjectGroup.prototype = Object.create(WrapperObject.prototype);
ObjectGroup.prototype.constructor = ObjectGroup;
ObjectGroup.prototype.__class__ = ObjectGroup;
ObjectGroup.__cache__ = {};
Module['ObjectGroup'] = ObjectGroup;

ObjectGroup.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ObjectGroup_GetName_0(self));
};;

ObjectGroup.prototype['AddObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ObjectGroup_AddObject_1(self, arg0);
};;

ObjectGroup.prototype['RemoveObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ObjectGroup_RemoveObject_1(self, arg0);
};;

ObjectGroup.prototype['Find'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_ObjectGroup_Find_1(self, arg0));
};;

  ObjectGroup.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ObjectGroup___destroy___0(self);
};
// Direction
function Direction() {
  this.ptr = _emscripten_bind_Direction_Direction_0();
  getCache(Direction)[this.ptr] = this;
};;
Direction.prototype = Object.create(WrapperObject.prototype);
Direction.prototype.constructor = Direction;
Direction.prototype.__class__ = Direction;
Direction.__cache__ = {};
Module['Direction'] = Direction;

Direction.prototype['AddSprite'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Direction_AddSprite_1(self, arg0);
};;

Direction.prototype['GetSprite'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Direction_GetSprite_1(self, arg0), Sprite);
};;

Direction.prototype['GetSpritesCount'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Direction_GetSpritesCount_0(self);
};;

Direction.prototype['HasNoSprites'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Direction_HasNoSprites_0(self));
};;

Direction.prototype['RemoveSprite'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Direction_RemoveSprite_1(self, arg0);
};;

Direction.prototype['RemoveAllSprites'] = function() {
  var self = this.ptr;
  _emscripten_bind_Direction_RemoveAllSprites_0(self);
};;

Direction.prototype['IsLooping'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Direction_IsLooping_0(self));
};;

Direction.prototype['SetLoop'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Direction_SetLoop_1(self, arg0);
};;

Direction.prototype['GetTimeBetweenFrames'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Direction_GetTimeBetweenFrames_0(self);
};;

Direction.prototype['SetTimeBetweenFrames'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Direction_SetTimeBetweenFrames_1(self, arg0);
};;

Direction.prototype['SwapSprites'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_Direction_SwapSprites_2(self, arg0, arg1);
};;

  Direction.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Direction___destroy___0(self);
};
// InstructionSentenceFormatter
function InstructionSentenceFormatter() { throw "cannot construct a InstructionSentenceFormatter, no constructor in IDL" }
InstructionSentenceFormatter.prototype = Object.create(WrapperObject.prototype);
InstructionSentenceFormatter.prototype.constructor = InstructionSentenceFormatter;
InstructionSentenceFormatter.prototype.__class__ = InstructionSentenceFormatter;
InstructionSentenceFormatter.__cache__ = {};
Module['InstructionSentenceFormatter'] = InstructionSentenceFormatter;

InstructionSentenceFormatter.prototype['STATIC_Get'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_InstructionSentenceFormatter_STATIC_Get_0(self), InstructionSentenceFormatter);
};;

InstructionSentenceFormatter.prototype['Translate'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return Pointer_stringify(_emscripten_bind_InstructionSentenceFormatter_Translate_2(self, arg0, arg1));
};;

InstructionSentenceFormatter.prototype['GetAsFormattedText'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return wrapPointer(_emscripten_bind_InstructionSentenceFormatter_GetAsFormattedText_2(self, arg0, arg1), VectorPairStringTextFormatting);
};;

InstructionSentenceFormatter.prototype['GetFormattingFromType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_InstructionSentenceFormatter_GetFormattingFromType_1(self, arg0), TextFormatting);
};;

InstructionSentenceFormatter.prototype['LabelFromType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return Pointer_stringify(_emscripten_bind_InstructionSentenceFormatter_LabelFromType_1(self, arg0));
};;

InstructionSentenceFormatter.prototype['LoadTypesFormattingFromConfig'] = function() {
  var self = this.ptr;
  _emscripten_bind_InstructionSentenceFormatter_LoadTypesFormattingFromConfig_0(self);
};;

  InstructionSentenceFormatter.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_InstructionSentenceFormatter___destroy___0(self);
};
// PairStringVariable
function PairStringVariable() {
  this.ptr = _emscripten_bind_PairStringVariable_PairStringVariable_0();
  getCache(PairStringVariable)[this.ptr] = this;
};;
PairStringVariable.prototype = Object.create(WrapperObject.prototype);
PairStringVariable.prototype.constructor = PairStringVariable;
PairStringVariable.prototype.__class__ = PairStringVariable;
PairStringVariable.__cache__ = {};
Module['PairStringVariable'] = PairStringVariable;

PairStringVariable.prototype['WRAPPED_GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_PairStringVariable_WRAPPED_GetName_0(self));
};;

PairStringVariable.prototype['WRAPPED_GetVariable'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_PairStringVariable_WRAPPED_GetVariable_0(self), Variable);
};;

  PairStringVariable.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_PairStringVariable___destroy___0(self);
};
// ArbitraryResourceWorkerJS
function ArbitraryResourceWorkerJS() {
  this.ptr = _emscripten_bind_ArbitraryResourceWorkerJS_ArbitraryResourceWorkerJS_0();
  getCache(ArbitraryResourceWorkerJS)[this.ptr] = this;
};;
ArbitraryResourceWorkerJS.prototype = Object.create(ArbitraryResourceWorker.prototype);
ArbitraryResourceWorkerJS.prototype.constructor = ArbitraryResourceWorkerJS;
ArbitraryResourceWorkerJS.prototype.__class__ = ArbitraryResourceWorkerJS;
ArbitraryResourceWorkerJS.__cache__ = {};
Module['ArbitraryResourceWorkerJS'] = ArbitraryResourceWorkerJS;

ArbitraryResourceWorkerJS.prototype['ExposeImage'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ArbitraryResourceWorkerJS_ExposeImage_1(self, arg0);
};;

ArbitraryResourceWorkerJS.prototype['ExposeShader'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ArbitraryResourceWorkerJS_ExposeShader_1(self, arg0);
};;

ArbitraryResourceWorkerJS.prototype['ExposeFile'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ArbitraryResourceWorkerJS_ExposeFile_1(self, arg0);
};;

  ArbitraryResourceWorkerJS.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ArbitraryResourceWorkerJS___destroy___0(self);
};
// BaseEvent
function BaseEvent() {
  this.ptr = _emscripten_bind_BaseEvent_BaseEvent_0();
  getCache(BaseEvent)[this.ptr] = this;
};;
BaseEvent.prototype = Object.create(WrapperObject.prototype);
BaseEvent.prototype.constructor = BaseEvent;
BaseEvent.prototype.__class__ = BaseEvent;
BaseEvent.__cache__ = {};
Module['BaseEvent'] = BaseEvent;

BaseEvent.prototype['Clone'] = function() {
  var self = this.ptr;
  _emscripten_bind_BaseEvent_Clone_0(self);
};;

BaseEvent.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_BaseEvent_GetType_0(self));
};;

BaseEvent.prototype['SetType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_BaseEvent_SetType_1(self, arg0);
};;

BaseEvent.prototype['IsExecutable'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_BaseEvent_IsExecutable_0(self));
};;

BaseEvent.prototype['CanHaveSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_BaseEvent_CanHaveSubEvents_0(self));
};;

BaseEvent.prototype['HasSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_BaseEvent_HasSubEvents_0(self));
};;

BaseEvent.prototype['GetSubEvents'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_BaseEvent_GetSubEvents_0(self), EventsList);
};;

BaseEvent.prototype['IsDisabled'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_BaseEvent_IsDisabled_0(self));
};;

BaseEvent.prototype['SetDisabled'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_BaseEvent_SetDisabled_1(self, arg0);
};;

BaseEvent.prototype['IsFolded'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_BaseEvent_IsFolded_0(self));
};;

BaseEvent.prototype['SetFolded'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_BaseEvent_SetFolded_1(self, arg0);
};;

  BaseEvent.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_BaseEvent___destroy___0(self);
};
// SerializerElement
function SerializerElement() {
  this.ptr = _emscripten_bind_SerializerElement_SerializerElement_0();
  getCache(SerializerElement)[this.ptr] = this;
};;
SerializerElement.prototype = Object.create(WrapperObject.prototype);
SerializerElement.prototype.constructor = SerializerElement;
SerializerElement.prototype.__class__ = SerializerElement;
SerializerElement.__cache__ = {};
Module['SerializerElement'] = SerializerElement;

  SerializerElement.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_SerializerElement___destroy___0(self);
};
// MapStringExpressionMetadata
function MapStringExpressionMetadata() { throw "cannot construct a MapStringExpressionMetadata, no constructor in IDL" }
MapStringExpressionMetadata.prototype = Object.create(WrapperObject.prototype);
MapStringExpressionMetadata.prototype.constructor = MapStringExpressionMetadata;
MapStringExpressionMetadata.prototype.__class__ = MapStringExpressionMetadata;
MapStringExpressionMetadata.__cache__ = {};
Module['MapStringExpressionMetadata'] = MapStringExpressionMetadata;

MapStringExpressionMetadata.prototype['MAP_get'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_MapStringExpressionMetadata_MAP_get_1(self, arg0), ExpressionMetadata);
};;

MapStringExpressionMetadata.prototype['MAP_set'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_MapStringExpressionMetadata_MAP_set_2(self, arg0, arg1);
};;

MapStringExpressionMetadata.prototype['MAP_has'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_MapStringExpressionMetadata_MAP_has_1(self, arg0));
};;

MapStringExpressionMetadata.prototype['MAP_keys'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_MapStringExpressionMetadata_MAP_keys_0(self), VectorString);
};;

  MapStringExpressionMetadata.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_MapStringExpressionMetadata___destroy___0(self);
};
// VectorPairStringTextFormatting
function VectorPairStringTextFormatting() { throw "cannot construct a VectorPairStringTextFormatting, no constructor in IDL" }
VectorPairStringTextFormatting.prototype = Object.create(WrapperObject.prototype);
VectorPairStringTextFormatting.prototype.constructor = VectorPairStringTextFormatting;
VectorPairStringTextFormatting.prototype.__class__ = VectorPairStringTextFormatting;
VectorPairStringTextFormatting.__cache__ = {};
Module['VectorPairStringTextFormatting'] = VectorPairStringTextFormatting;

VectorPairStringTextFormatting.prototype['size'] = function() {
  var self = this.ptr;
  return _emscripten_bind_VectorPairStringTextFormatting_size_0(self);
};;

VectorPairStringTextFormatting.prototype['WRAPPED_GetString'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return Pointer_stringify(_emscripten_bind_VectorPairStringTextFormatting_WRAPPED_GetString_1(self, arg0));
};;

VectorPairStringTextFormatting.prototype['WRAPPED_GetTextFormatting'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_VectorPairStringTextFormatting_WRAPPED_GetTextFormatting_1(self, arg0), TextFormatting);
};;

  VectorPairStringTextFormatting.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_VectorPairStringTextFormatting___destroy___0(self);
};
// TiledSpriteObject
function TiledSpriteObject(arg0) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  this.ptr = _emscripten_bind_TiledSpriteObject_TiledSpriteObject_1(arg0);
  getCache(TiledSpriteObject)[this.ptr] = this;
};;
TiledSpriteObject.prototype = Object.create(WrapperObject.prototype);
TiledSpriteObject.prototype.constructor = TiledSpriteObject;
TiledSpriteObject.prototype.__class__ = TiledSpriteObject;
TiledSpriteObject.__cache__ = {};
Module['TiledSpriteObject'] = TiledSpriteObject;

TiledSpriteObject.prototype['SetTexture'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TiledSpriteObject_SetTexture_1(self, arg0);
};;

TiledSpriteObject.prototype['GetTexture'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_TiledSpriteObject_GetTexture_0(self));
};;

TiledSpriteObject.prototype['SetWidth'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TiledSpriteObject_SetWidth_1(self, arg0);
};;

TiledSpriteObject.prototype['GetWidth'] = function() {
  var self = this.ptr;
  return _emscripten_bind_TiledSpriteObject_GetWidth_0(self);
};;

TiledSpriteObject.prototype['SetHeight'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TiledSpriteObject_SetHeight_1(self, arg0);
};;

TiledSpriteObject.prototype['GetHeight'] = function() {
  var self = this.ptr;
  return _emscripten_bind_TiledSpriteObject_GetHeight_0(self);
};;

TiledSpriteObject.prototype['Clone'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_TiledSpriteObject_Clone_0(self), gdObject);
};;

TiledSpriteObject.prototype['SetName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TiledSpriteObject_SetName_1(self, arg0);
};;

TiledSpriteObject.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_TiledSpriteObject_GetName_0(self));
};;

TiledSpriteObject.prototype['SetType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TiledSpriteObject_SetType_1(self, arg0);
};;

TiledSpriteObject.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_TiledSpriteObject_GetType_0(self));
};;

TiledSpriteObject.prototype['GetVariables'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_TiledSpriteObject_GetVariables_0(self), VariablesContainer);
};;

TiledSpriteObject.prototype['GetAllAutomatismNames'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_TiledSpriteObject_GetAllAutomatismNames_0(self), VectorString);
};;

TiledSpriteObject.prototype['HasAutomatismNamed'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_TiledSpriteObject_HasAutomatismNamed_1(self, arg0));
};;

TiledSpriteObject.prototype['AddNewAutomatism'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return wrapPointer(_emscripten_bind_TiledSpriteObject_AddNewAutomatism_3(self, arg0, arg1, arg2), Automatism);
};;

TiledSpriteObject.prototype['GetAutomatism'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_TiledSpriteObject_GetAutomatism_1(self, arg0), Automatism);
};;

TiledSpriteObject.prototype['RemoveAutomatism'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TiledSpriteObject_RemoveAutomatism_1(self, arg0);
};;

TiledSpriteObject.prototype['RenameAutomatism'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return !!(_emscripten_bind_TiledSpriteObject_RenameAutomatism_2(self, arg0, arg1));
};;

TiledSpriteObject.prototype['SerializeTo'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TiledSpriteObject_SerializeTo_1(self, arg0);
};;

TiledSpriteObject.prototype['UnserializeFrom'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_TiledSpriteObject_UnserializeFrom_2(self, arg0, arg1);
};;

  TiledSpriteObject.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_TiledSpriteObject___destroy___0(self);
};
// EventsCodeGenerator
function EventsCodeGenerator() { throw "cannot construct a EventsCodeGenerator, no constructor in IDL" }
EventsCodeGenerator.prototype = Object.create(WrapperObject.prototype);
EventsCodeGenerator.prototype.constructor = EventsCodeGenerator;
EventsCodeGenerator.prototype.__class__ = EventsCodeGenerator;
EventsCodeGenerator.__cache__ = {};
Module['EventsCodeGenerator'] = EventsCodeGenerator;

EventsCodeGenerator.prototype['STATIC_GenerateSceneEventsCompleteCode'] = function(arg0, arg1, arg2, arg3, arg4) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  if (arg3 && typeof arg3 === 'object') arg3 = arg3.ptr;
  else arg3 = ensureString(arg3);
  if (arg4 && typeof arg4 === 'object') arg4 = arg4.ptr;
  else arg4 = ensureString(arg4);
  return Pointer_stringify(_emscripten_bind_EventsCodeGenerator_STATIC_GenerateSceneEventsCompleteCode_5(self, arg0, arg1, arg2, arg3, arg4));
};;

// InstructionsList
function InstructionsList() {
  this.ptr = _emscripten_bind_InstructionsList_InstructionsList_0();
  getCache(InstructionsList)[this.ptr] = this;
};;
InstructionsList.prototype = Object.create(WrapperObject.prototype);
InstructionsList.prototype.constructor = InstructionsList;
InstructionsList.prototype.__class__ = InstructionsList;
InstructionsList.__cache__ = {};
Module['InstructionsList'] = InstructionsList;

InstructionsList.prototype['Insert'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_InstructionsList_Insert_2(self, arg0, arg1);
};;

InstructionsList.prototype['size'] = function() {
  var self = this.ptr;
  return _emscripten_bind_InstructionsList_size_0(self);
};;

InstructionsList.prototype['WRAPPED_set'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_InstructionsList_WRAPPED_set_2(self, arg0, arg1);
};;

InstructionsList.prototype['Get'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_InstructionsList_Get_1(self, arg0), Instruction);
};;

InstructionsList.prototype['Remove'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InstructionsList_Remove_1(self, arg0);
};;

InstructionsList.prototype['Clear'] = function() {
  var self = this.ptr;
  _emscripten_bind_InstructionsList_Clear_0(self);
};;

  InstructionsList.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_InstructionsList___destroy___0(self);
};
// Variable
function Variable() {
  this.ptr = _emscripten_bind_Variable_Variable_0();
  getCache(Variable)[this.ptr] = this;
};;
Variable.prototype = Object.create(WrapperObject.prototype);
Variable.prototype.constructor = Variable;
Variable.prototype.__class__ = Variable;
Variable.__cache__ = {};
Module['Variable'] = Variable;

Variable.prototype['SetString'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Variable_SetString_1(self, arg0);
};;

Variable.prototype['GetString'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Variable_GetString_0(self));
};;

Variable.prototype['SetValue'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Variable_SetValue_1(self, arg0);
};;

Variable.prototype['GetValue'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Variable_GetValue_0(self);
};;

Variable.prototype['HasChild'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_Variable_HasChild_1(self, arg0));
};;

Variable.prototype['GetChild'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Variable_GetChild_1(self, arg0), Variable);
};;

Variable.prototype['RemoveChild'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Variable_RemoveChild_1(self, arg0);
};;

Variable.prototype['GetAllChildren'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Variable_GetAllChildren_0(self), MapStringVariable);
};;

Variable.prototype['IsNumber'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Variable_IsNumber_0(self));
};;

Variable.prototype['IsStructure'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Variable_IsStructure_0(self));
};;

  Variable.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Variable___destroy___0(self);
};
// RepeatEvent
function RepeatEvent() {
  this.ptr = _emscripten_bind_RepeatEvent_RepeatEvent_0();
  getCache(RepeatEvent)[this.ptr] = this;
};;
RepeatEvent.prototype = Object.create(WrapperObject.prototype);
RepeatEvent.prototype.constructor = RepeatEvent;
RepeatEvent.prototype.__class__ = RepeatEvent;
RepeatEvent.__cache__ = {};
Module['RepeatEvent'] = RepeatEvent;

RepeatEvent.prototype['GetConditions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RepeatEvent_GetConditions_0(self), InstructionsList);
};;

RepeatEvent.prototype['GetActions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RepeatEvent_GetActions_0(self), InstructionsList);
};;

RepeatEvent.prototype['SetRepeatExpression'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RepeatEvent_SetRepeatExpression_1(self, arg0);
};;

RepeatEvent.prototype['GetRepeatExpression'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RepeatEvent_GetRepeatExpression_0(self));
};;

RepeatEvent.prototype['Clone'] = function() {
  var self = this.ptr;
  _emscripten_bind_RepeatEvent_Clone_0(self);
};;

RepeatEvent.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RepeatEvent_GetType_0(self));
};;

RepeatEvent.prototype['SetType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RepeatEvent_SetType_1(self, arg0);
};;

RepeatEvent.prototype['IsExecutable'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_RepeatEvent_IsExecutable_0(self));
};;

RepeatEvent.prototype['CanHaveSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_RepeatEvent_CanHaveSubEvents_0(self));
};;

RepeatEvent.prototype['HasSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_RepeatEvent_HasSubEvents_0(self));
};;

RepeatEvent.prototype['GetSubEvents'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RepeatEvent_GetSubEvents_0(self), EventsList);
};;

RepeatEvent.prototype['IsDisabled'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_RepeatEvent_IsDisabled_0(self));
};;

RepeatEvent.prototype['SetDisabled'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RepeatEvent_SetDisabled_1(self, arg0);
};;

RepeatEvent.prototype['IsFolded'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_RepeatEvent_IsFolded_0(self));
};;

RepeatEvent.prototype['SetFolded'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RepeatEvent_SetFolded_1(self, arg0);
};;

  RepeatEvent.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RepeatEvent___destroy___0(self);
};
// MapStringInstructionMetadata
function MapStringInstructionMetadata() { throw "cannot construct a MapStringInstructionMetadata, no constructor in IDL" }
MapStringInstructionMetadata.prototype = Object.create(WrapperObject.prototype);
MapStringInstructionMetadata.prototype.constructor = MapStringInstructionMetadata;
MapStringInstructionMetadata.prototype.__class__ = MapStringInstructionMetadata;
MapStringInstructionMetadata.__cache__ = {};
Module['MapStringInstructionMetadata'] = MapStringInstructionMetadata;

MapStringInstructionMetadata.prototype['MAP_get'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_MapStringInstructionMetadata_MAP_get_1(self, arg0), InstructionMetadata);
};;

MapStringInstructionMetadata.prototype['MAP_set'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_MapStringInstructionMetadata_MAP_set_2(self, arg0, arg1);
};;

MapStringInstructionMetadata.prototype['MAP_has'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_MapStringInstructionMetadata_MAP_has_1(self, arg0));
};;

MapStringInstructionMetadata.prototype['MAP_keys'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_MapStringInstructionMetadata_MAP_keys_0(self), VectorString);
};;

  MapStringInstructionMetadata.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_MapStringInstructionMetadata___destroy___0(self);
};
// InitialInstance
function InitialInstance() {
  this.ptr = _emscripten_bind_InitialInstance_InitialInstance_0();
  getCache(InitialInstance)[this.ptr] = this;
};;
InitialInstance.prototype = Object.create(WrapperObject.prototype);
InitialInstance.prototype.constructor = InitialInstance;
InitialInstance.prototype.__class__ = InitialInstance;
InitialInstance.__cache__ = {};
Module['InitialInstance'] = InitialInstance;

InitialInstance.prototype['SetObjectName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstance_SetObjectName_1(self, arg0);
};;

InitialInstance.prototype['GetObjectName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_InitialInstance_GetObjectName_0(self));
};;

InitialInstance.prototype['GetX'] = function() {
  var self = this.ptr;
  return _emscripten_bind_InitialInstance_GetX_0(self);
};;

InitialInstance.prototype['SetX'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstance_SetX_1(self, arg0);
};;

InitialInstance.prototype['GetY'] = function() {
  var self = this.ptr;
  return _emscripten_bind_InitialInstance_GetY_0(self);
};;

InitialInstance.prototype['SetY'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstance_SetY_1(self, arg0);
};;

InitialInstance.prototype['GetAngle'] = function() {
  var self = this.ptr;
  return _emscripten_bind_InitialInstance_GetAngle_0(self);
};;

InitialInstance.prototype['SetAngle'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstance_SetAngle_1(self, arg0);
};;

InitialInstance.prototype['IsLocked'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_InitialInstance_IsLocked_0(self));
};;

InitialInstance.prototype['SetLocked'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstance_SetLocked_1(self, arg0);
};;

InitialInstance.prototype['GetZOrder'] = function() {
  var self = this.ptr;
  return _emscripten_bind_InitialInstance_GetZOrder_0(self);
};;

InitialInstance.prototype['SetZOrder'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstance_SetZOrder_1(self, arg0);
};;

InitialInstance.prototype['GetLayer'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_InitialInstance_GetLayer_0(self));
};;

InitialInstance.prototype['SetLayer'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstance_SetLayer_1(self, arg0);
};;

InitialInstance.prototype['SetHasCustomSize'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstance_SetHasCustomSize_1(self, arg0);
};;

InitialInstance.prototype['HasCustomSize'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_InitialInstance_HasCustomSize_0(self));
};;

InitialInstance.prototype['SetCustomWidth'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstance_SetCustomWidth_1(self, arg0);
};;

InitialInstance.prototype['GetCustomWidth'] = function() {
  var self = this.ptr;
  return _emscripten_bind_InitialInstance_GetCustomWidth_0(self);
};;

InitialInstance.prototype['SetCustomHeight'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstance_SetCustomHeight_1(self, arg0);
};;

InitialInstance.prototype['GetCustomHeight'] = function() {
  var self = this.ptr;
  return _emscripten_bind_InitialInstance_GetCustomHeight_0(self);
};;

InitialInstance.prototype['UpdateCustomProperty'] = function(arg0, arg1, arg2, arg3) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  if (arg3 && typeof arg3 === 'object') arg3 = arg3.ptr;
  else arg3 = ensureString(arg3);
  _emscripten_bind_InitialInstance_UpdateCustomProperty_4(self, arg0, arg1, arg2, arg3);
};;

InitialInstance.prototype['GetCustomProperties'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return wrapPointer(_emscripten_bind_InitialInstance_GetCustomProperties_2(self, arg0, arg1), MapStringPropertyDescriptor);
};;

InitialInstance.prototype['GetVariables'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_InitialInstance_GetVariables_0(self), VariablesContainer);
};;

  InitialInstance.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_InitialInstance___destroy___0(self);
};
// GroupEvent
function GroupEvent() {
  this.ptr = _emscripten_bind_GroupEvent_GroupEvent_0();
  getCache(GroupEvent)[this.ptr] = this;
};;
GroupEvent.prototype = Object.create(WrapperObject.prototype);
GroupEvent.prototype.constructor = GroupEvent;
GroupEvent.prototype.__class__ = GroupEvent;
GroupEvent.__cache__ = {};
Module['GroupEvent'] = GroupEvent;

GroupEvent.prototype['SetName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GroupEvent_SetName_1(self, arg0);
};;

GroupEvent.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GroupEvent_GetName_0(self));
};;

GroupEvent.prototype['SetBackgroundColor'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  _emscripten_bind_GroupEvent_SetBackgroundColor_3(self, arg0, arg1, arg2);
};;

GroupEvent.prototype['GetBackgroundColorR'] = function() {
  var self = this.ptr;
  return _emscripten_bind_GroupEvent_GetBackgroundColorR_0(self);
};;

GroupEvent.prototype['GetBackgroundColorG'] = function() {
  var self = this.ptr;
  return _emscripten_bind_GroupEvent_GetBackgroundColorG_0(self);
};;

GroupEvent.prototype['GetBackgroundColorB'] = function() {
  var self = this.ptr;
  return _emscripten_bind_GroupEvent_GetBackgroundColorB_0(self);
};;

GroupEvent.prototype['SetSource'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GroupEvent_SetSource_1(self, arg0);
};;

GroupEvent.prototype['GetSource'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GroupEvent_GetSource_0(self));
};;

GroupEvent.prototype['GetCreationParameters'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_GroupEvent_GetCreationParameters_0(self), VectorString);
};;

GroupEvent.prototype['GetCreationTimestamp'] = function() {
  var self = this.ptr;
  return _emscripten_bind_GroupEvent_GetCreationTimestamp_0(self);
};;

GroupEvent.prototype['SetCreationTimestamp'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GroupEvent_SetCreationTimestamp_1(self, arg0);
};;

GroupEvent.prototype['Clone'] = function() {
  var self = this.ptr;
  _emscripten_bind_GroupEvent_Clone_0(self);
};;

GroupEvent.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GroupEvent_GetType_0(self));
};;

GroupEvent.prototype['SetType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GroupEvent_SetType_1(self, arg0);
};;

GroupEvent.prototype['IsExecutable'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_GroupEvent_IsExecutable_0(self));
};;

GroupEvent.prototype['CanHaveSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_GroupEvent_CanHaveSubEvents_0(self));
};;

GroupEvent.prototype['HasSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_GroupEvent_HasSubEvents_0(self));
};;

GroupEvent.prototype['GetSubEvents'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_GroupEvent_GetSubEvents_0(self), EventsList);
};;

GroupEvent.prototype['IsDisabled'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_GroupEvent_IsDisabled_0(self));
};;

GroupEvent.prototype['SetDisabled'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GroupEvent_SetDisabled_1(self, arg0);
};;

GroupEvent.prototype['IsFolded'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_GroupEvent_IsFolded_0(self));
};;

GroupEvent.prototype['SetFolded'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GroupEvent_SetFolded_1(self, arg0);
};;

  GroupEvent.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_GroupEvent___destroy___0(self);
};
// EventMetadata
function EventMetadata() { throw "cannot construct a EventMetadata, no constructor in IDL" }
EventMetadata.prototype = Object.create(WrapperObject.prototype);
EventMetadata.prototype.constructor = EventMetadata;
EventMetadata.prototype.__class__ = EventMetadata;
EventMetadata.__cache__ = {};
Module['EventMetadata'] = EventMetadata;

EventMetadata.prototype['GetFullName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_EventMetadata_GetFullName_0(self));
};;

EventMetadata.prototype['GetDescription'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_EventMetadata_GetDescription_0(self));
};;

EventMetadata.prototype['GetGroup'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_EventMetadata_GetGroup_0(self));
};;

  EventMetadata.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_EventMetadata___destroy___0(self);
};
// ResourcesManager
function ResourcesManager() {
  this.ptr = _emscripten_bind_ResourcesManager_ResourcesManager_0();
  getCache(ResourcesManager)[this.ptr] = this;
};;
ResourcesManager.prototype = Object.create(WrapperObject.prototype);
ResourcesManager.prototype.constructor = ResourcesManager;
ResourcesManager.prototype.__class__ = ResourcesManager;
ResourcesManager.__cache__ = {};
Module['ResourcesManager'] = ResourcesManager;

ResourcesManager.prototype['GetAllResourcesList'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ResourcesManager_GetAllResourcesList_0(self), VectorString);
};;

ResourcesManager.prototype['HasResource'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_ResourcesManager_HasResource_1(self, arg0));
};;

ResourcesManager.prototype['GetResource'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ResourcesManager_GetResource_1(self, arg0);
};;

ResourcesManager.prototype['AddResource'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ResourcesManager_AddResource_1(self, arg0);
};;

ResourcesManager.prototype['RemoveResource'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ResourcesManager_RemoveResource_1(self, arg0);
};;

ResourcesManager.prototype['RenameResource'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_ResourcesManager_RenameResource_2(self, arg0, arg1);
};;

ResourcesManager.prototype['MoveResourceUpInList'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ResourcesManager_MoveResourceUpInList_1(self, arg0);
};;

ResourcesManager.prototype['MoveResourceDownInList'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ResourcesManager_MoveResourceDownInList_1(self, arg0);
};;

  ResourcesManager.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ResourcesManager___destroy___0(self);
};
// PlatformExtension
function PlatformExtension() { throw "cannot construct a PlatformExtension, no constructor in IDL" }
PlatformExtension.prototype = Object.create(WrapperObject.prototype);
PlatformExtension.prototype.constructor = PlatformExtension;
PlatformExtension.prototype.__class__ = PlatformExtension;
PlatformExtension.__cache__ = {};
Module['PlatformExtension'] = PlatformExtension;

PlatformExtension.prototype['GetFullName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_PlatformExtension_GetFullName_0(self));
};;

PlatformExtension.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_PlatformExtension_GetName_0(self));
};;

PlatformExtension.prototype['GetDescription'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_PlatformExtension_GetDescription_0(self));
};;

PlatformExtension.prototype['GetAuthor'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_PlatformExtension_GetAuthor_0(self));
};;

PlatformExtension.prototype['GetLicense'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_PlatformExtension_GetLicense_0(self));
};;

PlatformExtension.prototype['IsBuiltin'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_PlatformExtension_IsBuiltin_0(self));
};;

PlatformExtension.prototype['GetNameSpace'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_PlatformExtension_GetNameSpace_0(self));
};;

PlatformExtension.prototype['GetExtensionObjectsTypes'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_PlatformExtension_GetExtensionObjectsTypes_0(self), VectorString);
};;

PlatformExtension.prototype['GetAutomatismsTypes'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAutomatismsTypes_0(self), VectorString);
};;

PlatformExtension.prototype['GetObjectMetadata'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PlatformExtension_GetObjectMetadata_1(self, arg0), ObjectMetadata);
};;

PlatformExtension.prototype['GetAutomatismMetadata'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAutomatismMetadata_1(self, arg0), AutomatismMetadata);
};;

PlatformExtension.prototype['GetAllEvents'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAllEvents_0(self), MapStringEventMetadata);
};;

PlatformExtension.prototype['GetAllActions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAllActions_0(self), MapStringInstructionMetadata);
};;

PlatformExtension.prototype['GetAllConditions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAllConditions_0(self), MapStringInstructionMetadata);
};;

PlatformExtension.prototype['GetAllExpressions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAllExpressions_0(self), MapStringExpressionMetadata);
};;

PlatformExtension.prototype['GetAllStrExpressions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAllStrExpressions_0(self), MapStringExpressionMetadata);
};;

PlatformExtension.prototype['GetAllActionsForObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAllActionsForObject_1(self, arg0), MapStringInstructionMetadata);
};;

PlatformExtension.prototype['GetAllConditionsForObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAllConditionsForObject_1(self, arg0), MapStringInstructionMetadata);
};;

PlatformExtension.prototype['GetAllExpressionsForObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAllExpressionsForObject_1(self, arg0), MapStringExpressionMetadata);
};;

PlatformExtension.prototype['GetAllStrExpressionsForObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAllStrExpressionsForObject_1(self, arg0), MapStringExpressionMetadata);
};;

PlatformExtension.prototype['GetAllActionsForAutomatism'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAllActionsForAutomatism_1(self, arg0), MapStringInstructionMetadata);
};;

PlatformExtension.prototype['GetAllConditionsForAutomatism'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAllConditionsForAutomatism_1(self, arg0), MapStringInstructionMetadata);
};;

PlatformExtension.prototype['GetAllExpressionsForAutomatism'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAllExpressionsForAutomatism_1(self, arg0), MapStringExpressionMetadata);
};;

PlatformExtension.prototype['GetAllStrExpressionsForAutomatism'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PlatformExtension_GetAllStrExpressionsForAutomatism_1(self, arg0), MapStringExpressionMetadata);
};;

  PlatformExtension.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_PlatformExtension___destroy___0(self);
};
// AbstractFileSystemJS
function AbstractFileSystemJS() {
  this.ptr = _emscripten_bind_AbstractFileSystemJS_AbstractFileSystemJS_0();
  getCache(AbstractFileSystemJS)[this.ptr] = this;
};;
AbstractFileSystemJS.prototype = Object.create(AbstractFileSystem.prototype);
AbstractFileSystemJS.prototype.constructor = AbstractFileSystemJS;
AbstractFileSystemJS.prototype.__class__ = AbstractFileSystemJS;
AbstractFileSystemJS.__cache__ = {};
Module['AbstractFileSystemJS'] = AbstractFileSystemJS;

AbstractFileSystemJS.prototype['MkDir'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_AbstractFileSystemJS_MkDir_1(self, arg0);
};;

AbstractFileSystemJS.prototype['DirExists'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_AbstractFileSystemJS_DirExists_1(self, arg0);
};;

AbstractFileSystemJS.prototype['ClearDir'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_AbstractFileSystemJS_ClearDir_1(self, arg0);
};;

AbstractFileSystemJS.prototype['GetTempDir'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_AbstractFileSystemJS_GetTempDir_0(self));
};;

AbstractFileSystemJS.prototype['FileNameFrom'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return Pointer_stringify(_emscripten_bind_AbstractFileSystemJS_FileNameFrom_1(self, arg0));
};;

AbstractFileSystemJS.prototype['DirNameFrom'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return Pointer_stringify(_emscripten_bind_AbstractFileSystemJS_DirNameFrom_1(self, arg0));
};;

AbstractFileSystemJS.prototype['IsAbsolute'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_AbstractFileSystemJS_IsAbsolute_1(self, arg0));
};;

AbstractFileSystemJS.prototype['CopyFile'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_AbstractFileSystemJS_CopyFile_2(self, arg0, arg1);
};;

AbstractFileSystemJS.prototype['WriteToFile'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_AbstractFileSystemJS_WriteToFile_2(self, arg0, arg1);
};;

AbstractFileSystemJS.prototype['ReadFile'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return Pointer_stringify(_emscripten_bind_AbstractFileSystemJS_ReadFile_1(self, arg0));
};;

AbstractFileSystemJS.prototype['ReadDir'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_AbstractFileSystemJS_ReadDir_1(self, arg0), VectorString);
};;

AbstractFileSystemJS.prototype['FileExists'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_AbstractFileSystemJS_FileExists_1(self, arg0));
};;

  AbstractFileSystemJS.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_AbstractFileSystemJS___destroy___0(self);
};
// HighestZOrderFinder
function HighestZOrderFinder() {
  this.ptr = _emscripten_bind_HighestZOrderFinder_HighestZOrderFinder_0();
  getCache(HighestZOrderFinder)[this.ptr] = this;
};;
HighestZOrderFinder.prototype = Object.create(WrapperObject.prototype);
HighestZOrderFinder.prototype.constructor = HighestZOrderFinder;
HighestZOrderFinder.prototype.__class__ = HighestZOrderFinder;
HighestZOrderFinder.__cache__ = {};
Module['HighestZOrderFinder'] = HighestZOrderFinder;

HighestZOrderFinder.prototype['RestrictSearchToLayer'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_HighestZOrderFinder_RestrictSearchToLayer_1(self, arg0);
};;

HighestZOrderFinder.prototype['GetHighestZOrder'] = function() {
  var self = this.ptr;
  return _emscripten_bind_HighestZOrderFinder_GetHighestZOrder_0(self);
};;

HighestZOrderFinder.prototype['GetLowestZOrder'] = function() {
  var self = this.ptr;
  return _emscripten_bind_HighestZOrderFinder_GetLowestZOrder_0(self);
};;

  HighestZOrderFinder.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_HighestZOrderFinder___destroy___0(self);
};
// InitialInstanceFunctor
function InitialInstanceFunctor() { throw "cannot construct a InitialInstanceFunctor, no constructor in IDL" }
InitialInstanceFunctor.prototype = Object.create(WrapperObject.prototype);
InitialInstanceFunctor.prototype.constructor = InitialInstanceFunctor;
InitialInstanceFunctor.prototype.__class__ = InitialInstanceFunctor;
InitialInstanceFunctor.__cache__ = {};
Module['InitialInstanceFunctor'] = InitialInstanceFunctor;

  InitialInstanceFunctor.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_InitialInstanceFunctor___destroy___0(self);
};
// SetString
function SetString() {
  this.ptr = _emscripten_bind_SetString_SetString_0();
  getCache(SetString)[this.ptr] = this;
};;
SetString.prototype = Object.create(WrapperObject.prototype);
SetString.prototype.constructor = SetString;
SetString.prototype.__class__ = SetString;
SetString.__cache__ = {};
Module['SetString'] = SetString;

  SetString.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_SetString___destroy___0(self);
};
// Instruction
function Instruction() {
  this.ptr = _emscripten_bind_Instruction_Instruction_0();
  getCache(Instruction)[this.ptr] = this;
};;
Instruction.prototype = Object.create(WrapperObject.prototype);
Instruction.prototype.constructor = Instruction;
Instruction.prototype.__class__ = Instruction;
Instruction.__cache__ = {};
Module['Instruction'] = Instruction;

Instruction.prototype['CLONE_Instruction'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Instruction_CLONE_Instruction_0(self), Instruction);
};;

Instruction.prototype['SetType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Instruction_SetType_1(self, arg0);
};;

Instruction.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Instruction_GetType_0(self));
};;

Instruction.prototype['SetInverted'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Instruction_SetInverted_1(self, arg0);
};;

Instruction.prototype['IsInverted'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Instruction_IsInverted_0(self));
};;

Instruction.prototype['SetParameter'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_Instruction_SetParameter_2(self, arg0, arg1);
};;

Instruction.prototype['GetParameter'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return Pointer_stringify(_emscripten_bind_Instruction_GetParameter_1(self, arg0));
};;

Instruction.prototype['SetParametersCount'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Instruction_SetParametersCount_1(self, arg0);
};;

Instruction.prototype['GetParametersCount'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Instruction_GetParametersCount_0(self);
};;

Instruction.prototype['GetSubInstructions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Instruction_GetSubInstructions_0(self), InstructionsList);
};;

  Instruction.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Instruction___destroy___0(self);
};
// JsPlatform
function JsPlatform() { throw "cannot construct a JsPlatform, no constructor in IDL" }
JsPlatform.prototype = Object.create(WrapperObject.prototype);
JsPlatform.prototype.constructor = JsPlatform;
JsPlatform.prototype.__class__ = JsPlatform;
JsPlatform.__cache__ = {};
Module['JsPlatform'] = JsPlatform;

JsPlatform.prototype['STATIC_Get'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_JsPlatform_STATIC_Get_0(self), JsPlatform);
};;

  JsPlatform.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_JsPlatform___destroy___0(self);
};
// PropertyDescriptor
function PropertyDescriptor(arg0) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  this.ptr = _emscripten_bind_PropertyDescriptor_PropertyDescriptor_1(arg0);
  getCache(PropertyDescriptor)[this.ptr] = this;
};;
PropertyDescriptor.prototype = Object.create(WrapperObject.prototype);
PropertyDescriptor.prototype.constructor = PropertyDescriptor;
PropertyDescriptor.prototype.__class__ = PropertyDescriptor;
PropertyDescriptor.__cache__ = {};
Module['PropertyDescriptor'] = PropertyDescriptor;

PropertyDescriptor.prototype['SetValue'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PropertyDescriptor_SetValue_1(self, arg0), PropertyDescriptor);
};;

PropertyDescriptor.prototype['GetValue'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_PropertyDescriptor_GetValue_0(self));
};;

PropertyDescriptor.prototype['SetType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PropertyDescriptor_SetType_1(self, arg0), PropertyDescriptor);
};;

PropertyDescriptor.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_PropertyDescriptor_GetType_0(self));
};;

PropertyDescriptor.prototype['AddExtraInfo'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PropertyDescriptor_AddExtraInfo_1(self, arg0), PropertyDescriptor);
};;

PropertyDescriptor.prototype['GetExtraInfo'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_PropertyDescriptor_GetExtraInfo_0(self), VectorString);
};;

  PropertyDescriptor.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_PropertyDescriptor___destroy___0(self);
};
// InitialInstanceJSFunctor
function InitialInstanceJSFunctor() {
  this.ptr = _emscripten_bind_InitialInstanceJSFunctor_InitialInstanceJSFunctor_0();
  getCache(InitialInstanceJSFunctor)[this.ptr] = this;
};;
InitialInstanceJSFunctor.prototype = Object.create(InitialInstanceJSFunctorWrapper.prototype);
InitialInstanceJSFunctor.prototype.constructor = InitialInstanceJSFunctor;
InitialInstanceJSFunctor.prototype.__class__ = InitialInstanceJSFunctor;
InitialInstanceJSFunctor.__cache__ = {};
Module['InitialInstanceJSFunctor'] = InitialInstanceJSFunctor;

InitialInstanceJSFunctor.prototype['invoke'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstanceJSFunctor_invoke_1(self, arg0);
};;

  InitialInstanceJSFunctor.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_InitialInstanceJSFunctor___destroy___0(self);
};
// Project
function Project() {
  this.ptr = _emscripten_bind_Project_Project_0();
  getCache(Project)[this.ptr] = this;
};;
Project.prototype = Object.create(WrapperObject.prototype);
Project.prototype.constructor = Project;
Project.prototype.__class__ = Project;
Project.__cache__ = {};
Module['Project'] = Project;

Project.prototype['SetName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_SetName_1(self, arg0);
};;

Project.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Project_GetName_0(self));
};;

Project.prototype['SetAuthor'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_SetAuthor_1(self, arg0);
};;

Project.prototype['GetAuthor'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Project_GetAuthor_0(self));
};;

Project.prototype['SetProjectFile'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_SetProjectFile_1(self, arg0);
};;

Project.prototype['GetProjectFile'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Project_GetProjectFile_0(self));
};;

Project.prototype['SetDefaultWidth'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_SetDefaultWidth_1(self, arg0);
};;

Project.prototype['GetMainWindowDefaultWidth'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Project_GetMainWindowDefaultWidth_0(self);
};;

Project.prototype['SetDefaultHeight'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_SetDefaultHeight_1(self, arg0);
};;

Project.prototype['GetMainWindowDefaultHeight'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Project_GetMainWindowDefaultHeight_0(self);
};;

Project.prototype['GetMaximumFPS'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Project_GetMaximumFPS_0(self);
};;

Project.prototype['SetMaximumFPS'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_SetMaximumFPS_1(self, arg0);
};;

Project.prototype['GetMinimumFPS'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Project_GetMinimumFPS_0(self);
};;

Project.prototype['SetMinimumFPS'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_SetMinimumFPS_1(self, arg0);
};;

Project.prototype['GetUsedExtensions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Project_GetUsedExtensions_0(self), VectorString);
};;

Project.prototype['AddPlatform'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_AddPlatform_1(self, arg0);
};;

Project.prototype['GetCurrentPlatform'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Project_GetCurrentPlatform_0(self), Platform);
};;

Project.prototype['HasLayoutNamed'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_Project_HasLayoutNamed_1(self, arg0));
};;

Project.prototype['GetLayout'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Project_GetLayout_1(self, arg0), Layout);
};;

Project.prototype['GetLayoutAt'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Project_GetLayoutAt_1(self, arg0), Layout);
};;

Project.prototype['GetLayoutsCount'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Project_GetLayoutsCount_0(self);
};;

Project.prototype['InsertNewLayout'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return wrapPointer(_emscripten_bind_Project_InsertNewLayout_2(self, arg0, arg1), Layout);
};;

Project.prototype['RemoveLayout'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_RemoveLayout_1(self, arg0);
};;

Project.prototype['SetFirstLayout'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_SetFirstLayout_1(self, arg0);
};;

Project.prototype['GetFirstLayout'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Project_GetFirstLayout_0(self));
};;

Project.prototype['GetVariables'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Project_GetVariables_0(self), VariablesContainer);
};;

Project.prototype['GetResourcesManager'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Project_GetResourcesManager_0(self), ResourcesManager);
};;

Project.prototype['ExposeResources'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_ExposeResources_1(self, arg0);
};;

Project.prototype['STATIC_ValidateObjectName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_Project_STATIC_ValidateObjectName_1(self, arg0));
};;

Project.prototype['IsDirty'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Project_IsDirty_0(self));
};;

Project.prototype['SerializeTo'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_SerializeTo_1(self, arg0);
};;

Project.prototype['UnserializeFrom'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_UnserializeFrom_1(self, arg0);
};;

Project.prototype['FREE_GetTypeOfAutomatism'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return Pointer_stringify(_emscripten_bind_Project_FREE_GetTypeOfAutomatism_3(self, arg0, arg1, arg2));
};;

Project.prototype['FREE_GetTypeOfObject'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return Pointer_stringify(_emscripten_bind_Project_FREE_GetTypeOfObject_3(self, arg0, arg1, arg2));
};;

Project.prototype['FREE_GetAutomatismsOfObject'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return wrapPointer(_emscripten_bind_Project_FREE_GetAutomatismsOfObject_3(self, arg0, arg1, arg2), VectorString);
};;

Project.prototype['InsertNewObject'] = function(arg0, arg1, arg2, arg3) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  if (arg3 && typeof arg3 === 'object') arg3 = arg3.ptr;
  else arg3 = ensureString(arg3);
  return wrapPointer(_emscripten_bind_Project_InsertNewObject_4(self, arg0, arg1, arg2, arg3), gdObject);
};;

Project.prototype['InsertObject'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return wrapPointer(_emscripten_bind_Project_InsertObject_2(self, arg0, arg1), gdObject);
};;

Project.prototype['HasObjectNamed'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_Project_HasObjectNamed_1(self, arg0));
};;

Project.prototype['GetObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Project_GetObject_1(self, arg0), gdObject);
};;

Project.prototype['GetObjectAt'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Project_GetObjectAt_1(self, arg0), gdObject);
};;

Project.prototype['GetObjectPosition'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_GetObjectPosition_1(self, arg0);
};;

Project.prototype['RemoveObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Project_RemoveObject_1(self, arg0);
};;

Project.prototype['SwapObjects'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_Project_SwapObjects_2(self, arg0, arg1);
};;

Project.prototype['GetObjectsCount'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Project_GetObjectsCount_0(self);
};;

  Project.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Project___destroy___0(self);
};
// MapStringVariable
function MapStringVariable() { throw "cannot construct a MapStringVariable, no constructor in IDL" }
MapStringVariable.prototype = Object.create(WrapperObject.prototype);
MapStringVariable.prototype.constructor = MapStringVariable;
MapStringVariable.prototype.__class__ = MapStringVariable;
MapStringVariable.__cache__ = {};
Module['MapStringVariable'] = MapStringVariable;

MapStringVariable.prototype['MAP_get'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_MapStringVariable_MAP_get_1(self, arg0), Variable);
};;

MapStringVariable.prototype['MAP_set'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_MapStringVariable_MAP_set_2(self, arg0, arg1);
};;

MapStringVariable.prototype['MAP_has'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_MapStringVariable_MAP_has_1(self, arg0));
};;

MapStringVariable.prototype['MAP_keys'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_MapStringVariable_MAP_keys_0(self), VectorString);
};;

  MapStringVariable.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_MapStringVariable___destroy___0(self);
};
// ImageResource
function ImageResource() {
  this.ptr = _emscripten_bind_ImageResource_ImageResource_0();
  getCache(ImageResource)[this.ptr] = this;
};;
ImageResource.prototype = Object.create(WrapperObject.prototype);
ImageResource.prototype.constructor = ImageResource;
ImageResource.prototype.__class__ = ImageResource;
ImageResource.__cache__ = {};
Module['ImageResource'] = ImageResource;

ImageResource.prototype['Clone'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ImageResource_Clone_0(self), Resource);
};;

ImageResource.prototype['SetName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ImageResource_SetName_1(self, arg0);
};;

ImageResource.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ImageResource_GetName_0(self));
};;

ImageResource.prototype['SetKind'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ImageResource_SetKind_1(self, arg0);
};;

ImageResource.prototype['GetKind'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ImageResource_GetKind_0(self));
};;

ImageResource.prototype['IsUserAdded'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ImageResource_IsUserAdded_0(self));
};;

ImageResource.prototype['SetUserAdded'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ImageResource_SetUserAdded_1(self, arg0);
};;

ImageResource.prototype['UseFile'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ImageResource_UseFile_0(self));
};;

ImageResource.prototype['SetFile'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ImageResource_SetFile_1(self, arg0);
};;

ImageResource.prototype['GetFile'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ImageResource_GetFile_0(self));
};;

ImageResource.prototype['GetAbsoluteFile'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return Pointer_stringify(_emscripten_bind_ImageResource_GetAbsoluteFile_1(self, arg0));
};;

ImageResource.prototype['SerializeTo'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ImageResource_SerializeTo_1(self, arg0);
};;

ImageResource.prototype['UnserializeFrom'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ImageResource_UnserializeFrom_1(self, arg0);
};;

  ImageResource.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ImageResource___destroy___0(self);
};
// ProjectResourcesAdder
function ProjectResourcesAdder() { throw "cannot construct a ProjectResourcesAdder, no constructor in IDL" }
ProjectResourcesAdder.prototype = Object.create(WrapperObject.prototype);
ProjectResourcesAdder.prototype.constructor = ProjectResourcesAdder;
ProjectResourcesAdder.prototype.__class__ = ProjectResourcesAdder;
ProjectResourcesAdder.__cache__ = {};
Module['ProjectResourcesAdder'] = ProjectResourcesAdder;

ProjectResourcesAdder.prototype['STATIC_AddAllMissingImages'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ProjectResourcesAdder_STATIC_AddAllMissingImages_1(self, arg0);
};;

ProjectResourcesAdder.prototype['STATIC_GetAllUselessResources'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ProjectResourcesAdder_STATIC_GetAllUselessResources_1(self, arg0);
};;

ProjectResourcesAdder.prototype['STATIC_RemoveAllUselessResources'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ProjectResourcesAdder_STATIC_RemoveAllUselessResources_1(self, arg0);
};;

  ProjectResourcesAdder.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ProjectResourcesAdder___destroy___0(self);
};
// Layer
function Layer() {
  this.ptr = _emscripten_bind_Layer_Layer_0();
  getCache(Layer)[this.ptr] = this;
};;
Layer.prototype = Object.create(WrapperObject.prototype);
Layer.prototype.constructor = Layer;
Layer.prototype.__class__ = Layer;
Layer.__cache__ = {};
Module['Layer'] = Layer;

Layer.prototype['SetName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Layer_SetName_1(self, arg0);
};;

Layer.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Layer_GetName_0(self));
};;

Layer.prototype['SetVisibility'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Layer_SetVisibility_1(self, arg0);
};;

Layer.prototype['GetVisibility'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Layer_GetVisibility_0(self));
};;

  Layer.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Layer___destroy___0(self);
};
// CommentEvent
function CommentEvent() {
  this.ptr = _emscripten_bind_CommentEvent_CommentEvent_0();
  getCache(CommentEvent)[this.ptr] = this;
};;
CommentEvent.prototype = Object.create(WrapperObject.prototype);
CommentEvent.prototype.constructor = CommentEvent;
CommentEvent.prototype.__class__ = CommentEvent;
CommentEvent.__cache__ = {};
Module['CommentEvent'] = CommentEvent;

CommentEvent.prototype['WRAPPED_GetComment'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_CommentEvent_WRAPPED_GetComment_0(self));
};;

CommentEvent.prototype['WRAPPED_SetComment'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_CommentEvent_WRAPPED_SetComment_1(self, arg0);
};;

CommentEvent.prototype['Clone'] = function() {
  var self = this.ptr;
  _emscripten_bind_CommentEvent_Clone_0(self);
};;

CommentEvent.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_CommentEvent_GetType_0(self));
};;

CommentEvent.prototype['SetType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_CommentEvent_SetType_1(self, arg0);
};;

CommentEvent.prototype['IsExecutable'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_CommentEvent_IsExecutable_0(self));
};;

CommentEvent.prototype['CanHaveSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_CommentEvent_CanHaveSubEvents_0(self));
};;

CommentEvent.prototype['HasSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_CommentEvent_HasSubEvents_0(self));
};;

CommentEvent.prototype['GetSubEvents'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_CommentEvent_GetSubEvents_0(self), EventsList);
};;

CommentEvent.prototype['IsDisabled'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_CommentEvent_IsDisabled_0(self));
};;

CommentEvent.prototype['SetDisabled'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_CommentEvent_SetDisabled_1(self, arg0);
};;

CommentEvent.prototype['IsFolded'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_CommentEvent_IsFolded_0(self));
};;

CommentEvent.prototype['SetFolded'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_CommentEvent_SetFolded_1(self, arg0);
};;

  CommentEvent.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_CommentEvent___destroy___0(self);
};
// AbstractFileSystem
function AbstractFileSystem() { throw "cannot construct a AbstractFileSystem, no constructor in IDL" }
AbstractFileSystem.prototype = Object.create(WrapperObject.prototype);
AbstractFileSystem.prototype.constructor = AbstractFileSystem;
AbstractFileSystem.prototype.__class__ = AbstractFileSystem;
AbstractFileSystem.__cache__ = {};
Module['AbstractFileSystem'] = AbstractFileSystem;

  AbstractFileSystem.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_AbstractFileSystem___destroy___0(self);
};
// ArbitraryEventsWorker
function ArbitraryEventsWorker() { throw "cannot construct a ArbitraryEventsWorker, no constructor in IDL" }
ArbitraryEventsWorker.prototype = Object.create(WrapperObject.prototype);
ArbitraryEventsWorker.prototype.constructor = ArbitraryEventsWorker;
ArbitraryEventsWorker.prototype.__class__ = ArbitraryEventsWorker;
ArbitraryEventsWorker.__cache__ = {};
Module['ArbitraryEventsWorker'] = ArbitraryEventsWorker;

ArbitraryEventsWorker.prototype['Launch'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ArbitraryEventsWorker_Launch_1(self, arg0);
};;

  ArbitraryEventsWorker.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ArbitraryEventsWorker___destroy___0(self);
};
// ObjectListDialogsHelper
function ObjectListDialogsHelper(arg0, arg1) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  this.ptr = _emscripten_bind_ObjectListDialogsHelper_ObjectListDialogsHelper_2(arg0, arg1);
  getCache(ObjectListDialogsHelper)[this.ptr] = this;
};;
ObjectListDialogsHelper.prototype = Object.create(WrapperObject.prototype);
ObjectListDialogsHelper.prototype.constructor = ObjectListDialogsHelper;
ObjectListDialogsHelper.prototype.__class__ = ObjectListDialogsHelper;
ObjectListDialogsHelper.__cache__ = {};
Module['ObjectListDialogsHelper'] = ObjectListDialogsHelper;

ObjectListDialogsHelper.prototype['SetSearchText'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ObjectListDialogsHelper_SetSearchText_1(self, arg0);
};;

ObjectListDialogsHelper.prototype['SetAllowedObjectType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ObjectListDialogsHelper_SetAllowedObjectType_1(self, arg0);
};;

ObjectListDialogsHelper.prototype['SetGroupsAllowed'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ObjectListDialogsHelper_SetGroupsAllowed_1(self, arg0);
};;

ObjectListDialogsHelper.prototype['GetMatchingObjects'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ObjectListDialogsHelper_GetMatchingObjects_0(self), VectorString);
};;

  ObjectListDialogsHelper.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ObjectListDialogsHelper___destroy___0(self);
};
// Serializer
function Serializer() { throw "cannot construct a Serializer, no constructor in IDL" }
Serializer.prototype = Object.create(WrapperObject.prototype);
Serializer.prototype.constructor = Serializer;
Serializer.prototype.__class__ = Serializer;
Serializer.__cache__ = {};
Module['Serializer'] = Serializer;

Serializer.prototype['STATIC_ToJSON'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return Pointer_stringify(_emscripten_bind_Serializer_STATIC_ToJSON_1(self, arg0));
};;

Serializer.prototype['STATIC_FromJSON'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Serializer_STATIC_FromJSON_1(self, arg0), SerializerElement);
};;

  Serializer.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Serializer___destroy___0(self);
};
// Sprite
function Sprite() {
  this.ptr = _emscripten_bind_Sprite_Sprite_0();
  getCache(Sprite)[this.ptr] = this;
};;
Sprite.prototype = Object.create(WrapperObject.prototype);
Sprite.prototype.constructor = Sprite;
Sprite.prototype.__class__ = Sprite;
Sprite.__cache__ = {};
Module['Sprite'] = Sprite;

Sprite.prototype['SetImageName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Sprite_SetImageName_1(self, arg0);
};;

Sprite.prototype['GetImageName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Sprite_GetImageName_0(self));
};;

Sprite.prototype['AddPoint'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Sprite_AddPoint_1(self, arg0);
};;

Sprite.prototype['DelPoint'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Sprite_DelPoint_1(self, arg0);
};;

Sprite.prototype['GetPoint'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Sprite_GetPoint_1(self, arg0), Point);
};;

Sprite.prototype['HasPoint'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_Sprite_HasPoint_1(self, arg0));
};;

Sprite.prototype['GetOrigin'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Sprite_GetOrigin_0(self), Point);
};;

Sprite.prototype['GetCenter'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Sprite_GetCenter_0(self), Point);
};;

Sprite.prototype['IsDefaultCenterPoint'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Sprite_IsDefaultCenterPoint_0(self));
};;

Sprite.prototype['SetDefaultCenterPoint'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Sprite_SetDefaultCenterPoint_1(self, arg0);
};;

  Sprite.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Sprite___destroy___0(self);
};
// gdObject
function gdObject(arg0) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  this.ptr = _emscripten_bind_gdObject_gdObject_1(arg0);
  getCache(gdObject)[this.ptr] = this;
};;
gdObject.prototype = Object.create(WrapperObject.prototype);
gdObject.prototype.constructor = gdObject;
gdObject.prototype.__class__ = gdObject;
gdObject.__cache__ = {};
Module['gdObject'] = gdObject;

gdObject.prototype['Clone'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_gdObject_Clone_0(self), gdObject);
};;

gdObject.prototype['SetName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_gdObject_SetName_1(self, arg0);
};;

gdObject.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_gdObject_GetName_0(self));
};;

gdObject.prototype['SetType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_gdObject_SetType_1(self, arg0);
};;

gdObject.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_gdObject_GetType_0(self));
};;

gdObject.prototype['GetVariables'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_gdObject_GetVariables_0(self), VariablesContainer);
};;

gdObject.prototype['GetAllAutomatismNames'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_gdObject_GetAllAutomatismNames_0(self), VectorString);
};;

gdObject.prototype['HasAutomatismNamed'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_gdObject_HasAutomatismNamed_1(self, arg0));
};;

gdObject.prototype['AddNewAutomatism'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return wrapPointer(_emscripten_bind_gdObject_AddNewAutomatism_3(self, arg0, arg1, arg2), Automatism);
};;

gdObject.prototype['GetAutomatism'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_gdObject_GetAutomatism_1(self, arg0), Automatism);
};;

gdObject.prototype['RemoveAutomatism'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_gdObject_RemoveAutomatism_1(self, arg0);
};;

gdObject.prototype['RenameAutomatism'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return !!(_emscripten_bind_gdObject_RenameAutomatism_2(self, arg0, arg1));
};;

gdObject.prototype['SerializeTo'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_gdObject_SerializeTo_1(self, arg0);
};;

gdObject.prototype['UnserializeFrom'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_gdObject_UnserializeFrom_2(self, arg0, arg1);
};;

  gdObject.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_gdObject___destroy___0(self);
};
// InitialInstancesContainer
function InitialInstancesContainer() {
  this.ptr = _emscripten_bind_InitialInstancesContainer_InitialInstancesContainer_0();
  getCache(InitialInstancesContainer)[this.ptr] = this;
};;
InitialInstancesContainer.prototype = Object.create(WrapperObject.prototype);
InitialInstancesContainer.prototype.constructor = InitialInstancesContainer;
InitialInstancesContainer.prototype.__class__ = InitialInstancesContainer;
InitialInstancesContainer.__cache__ = {};
Module['InitialInstancesContainer'] = InitialInstancesContainer;

InitialInstancesContainer.prototype['GetInstancesCount'] = function() {
  var self = this.ptr;
  return _emscripten_bind_InitialInstancesContainer_GetInstancesCount_0(self);
};;

InitialInstancesContainer.prototype['IterateOverInstances'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstancesContainer_IterateOverInstances_1(self, arg0);
};;

InitialInstancesContainer.prototype['IterateOverInstancesWithZOrdering'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_InitialInstancesContainer_IterateOverInstancesWithZOrdering_2(self, arg0, arg1);
};;

InitialInstancesContainer.prototype['MoveInstancesToLayer'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_InitialInstancesContainer_MoveInstancesToLayer_2(self, arg0, arg1);
};;

InitialInstancesContainer.prototype['RemoveAllInstancesOnLayer'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstancesContainer_RemoveAllInstancesOnLayer_1(self, arg0);
};;

InitialInstancesContainer.prototype['RemoveInitialInstancesOfObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstancesContainer_RemoveInitialInstancesOfObject_1(self, arg0);
};;

InitialInstancesContainer.prototype['SomeInstancesAreOnLayer'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_InitialInstancesContainer_SomeInstancesAreOnLayer_1(self, arg0));
};;

InitialInstancesContainer.prototype['RenameInstancesOfObject'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_InitialInstancesContainer_RenameInstancesOfObject_2(self, arg0, arg1);
};;

InitialInstancesContainer.prototype['RemoveInstance'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_InitialInstancesContainer_RemoveInstance_1(self, arg0);
};;

InitialInstancesContainer.prototype['InsertNewInitialInstance'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_InitialInstancesContainer_InsertNewInitialInstance_0(self), InitialInstance);
};;

InitialInstancesContainer.prototype['InsertInitialInstance'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_InitialInstancesContainer_InsertInitialInstance_1(self, arg0), InitialInstance);
};;

  InitialInstancesContainer.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_InitialInstancesContainer___destroy___0(self);
};
// VectorString
function VectorString() {
  this.ptr = _emscripten_bind_VectorString_VectorString_0();
  getCache(VectorString)[this.ptr] = this;
};;
VectorString.prototype = Object.create(WrapperObject.prototype);
VectorString.prototype.constructor = VectorString;
VectorString.prototype.__class__ = VectorString;
VectorString.__cache__ = {};
Module['VectorString'] = VectorString;

VectorString.prototype['push_back'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_VectorString_push_back_1(self, arg0);
};;

VectorString.prototype['resize'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_VectorString_resize_1(self, arg0);
};;

VectorString.prototype['size'] = function() {
  var self = this.ptr;
  return _emscripten_bind_VectorString_size_0(self);
};;

VectorString.prototype['at'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return Pointer_stringify(_emscripten_bind_VectorString_at_1(self, arg0));
};;

VectorString.prototype['WRAPPED_set'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_VectorString_WRAPPED_set_2(self, arg0, arg1);
};;

VectorString.prototype['clear'] = function() {
  var self = this.ptr;
  _emscripten_bind_VectorString_clear_0(self);
};;

  VectorString.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_VectorString___destroy___0(self);
};
// Exporter
function Exporter(arg0) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  this.ptr = _emscripten_bind_Exporter_Exporter_1(arg0);
  getCache(Exporter)[this.ptr] = this;
};;
Exporter.prototype = Object.create(WrapperObject.prototype);
Exporter.prototype.constructor = Exporter;
Exporter.prototype.__class__ = Exporter;
Exporter.__cache__ = {};
Module['Exporter'] = Exporter;

Exporter.prototype['ExportLayoutForPreview'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return !!(_emscripten_bind_Exporter_ExportLayoutForPreview_3(self, arg0, arg1, arg2));
};;

Exporter.prototype['ExportWholeProject'] = function(arg0, arg1, arg2, arg3, arg4) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  if (arg3 && typeof arg3 === 'object') arg3 = arg3.ptr;
  else arg3 = ensureString(arg3);
  if (arg4 && typeof arg4 === 'object') arg4 = arg4.ptr;
  else arg4 = ensureString(arg4);
  return !!(_emscripten_bind_Exporter_ExportWholeProject_5(self, arg0, arg1, arg2, arg3, arg4));
};;

Exporter.prototype['GetLastError'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Exporter_GetLastError_0(self));
};;

  Exporter.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Exporter___destroy___0(self);
};
// MetadataProvider
function MetadataProvider() { throw "cannot construct a MetadataProvider, no constructor in IDL" }
MetadataProvider.prototype = Object.create(WrapperObject.prototype);
MetadataProvider.prototype.constructor = MetadataProvider;
MetadataProvider.prototype.__class__ = MetadataProvider;
MetadataProvider.__cache__ = {};
Module['MetadataProvider'] = MetadataProvider;

MetadataProvider.prototype['STATIC_GetAutomatismMetadata'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return wrapPointer(_emscripten_bind_MetadataProvider_STATIC_GetAutomatismMetadata_2(self, arg0, arg1), AutomatismMetadata);
};;

MetadataProvider.prototype['STATIC_GetObjectMetadata'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return wrapPointer(_emscripten_bind_MetadataProvider_STATIC_GetObjectMetadata_2(self, arg0, arg1), ObjectMetadata);
};;

MetadataProvider.prototype['STATIC_GetActionMetadata'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return wrapPointer(_emscripten_bind_MetadataProvider_STATIC_GetActionMetadata_2(self, arg0, arg1), InstructionMetadata);
};;

MetadataProvider.prototype['STATIC_GetConditionMetadata'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return wrapPointer(_emscripten_bind_MetadataProvider_STATIC_GetConditionMetadata_2(self, arg0, arg1), InstructionMetadata);
};;

MetadataProvider.prototype['STATIC_GetExpressionMetadata'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return wrapPointer(_emscripten_bind_MetadataProvider_STATIC_GetExpressionMetadata_2(self, arg0, arg1), ExpressionMetadata);
};;

MetadataProvider.prototype['STATIC_GetObjectExpressionMetadata'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return wrapPointer(_emscripten_bind_MetadataProvider_STATIC_GetObjectExpressionMetadata_3(self, arg0, arg1, arg2), ExpressionMetadata);
};;

MetadataProvider.prototype['STATIC_GetAutomatismExpressionMetadata'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return wrapPointer(_emscripten_bind_MetadataProvider_STATIC_GetAutomatismExpressionMetadata_3(self, arg0, arg1, arg2), ExpressionMetadata);
};;

MetadataProvider.prototype['STATIC_GetStrExpressionMetadata'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return wrapPointer(_emscripten_bind_MetadataProvider_STATIC_GetStrExpressionMetadata_2(self, arg0, arg1), ExpressionMetadata);
};;

MetadataProvider.prototype['STATIC_GetObjectStrExpressionMetadata'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return wrapPointer(_emscripten_bind_MetadataProvider_STATIC_GetObjectStrExpressionMetadata_3(self, arg0, arg1, arg2), ExpressionMetadata);
};;

MetadataProvider.prototype['STATIC_GetAutomatismStrExpressionMetadata'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return wrapPointer(_emscripten_bind_MetadataProvider_STATIC_GetAutomatismStrExpressionMetadata_3(self, arg0, arg1, arg2), ExpressionMetadata);
};;

MetadataProvider.prototype['STATIC_HasCondition'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return !!(_emscripten_bind_MetadataProvider_STATIC_HasCondition_2(self, arg0, arg1));
};;

MetadataProvider.prototype['STATIC_HasAction'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return !!(_emscripten_bind_MetadataProvider_STATIC_HasAction_2(self, arg0, arg1));
};;

MetadataProvider.prototype['STATIC_HasObjectAction'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return !!(_emscripten_bind_MetadataProvider_STATIC_HasObjectAction_3(self, arg0, arg1, arg2));
};;

MetadataProvider.prototype['STATIC_HasObjectCondition'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return !!(_emscripten_bind_MetadataProvider_STATIC_HasObjectCondition_3(self, arg0, arg1, arg2));
};;

MetadataProvider.prototype['STATIC_HasAutomatismAction'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return !!(_emscripten_bind_MetadataProvider_STATIC_HasAutomatismAction_3(self, arg0, arg1, arg2));
};;

MetadataProvider.prototype['STATIC_HasAutomatismCondition'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return !!(_emscripten_bind_MetadataProvider_STATIC_HasAutomatismCondition_3(self, arg0, arg1, arg2));
};;

MetadataProvider.prototype['STATIC_HasExpression'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return !!(_emscripten_bind_MetadataProvider_STATIC_HasExpression_2(self, arg0, arg1));
};;

MetadataProvider.prototype['STATIC_HasObjectExpression'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return !!(_emscripten_bind_MetadataProvider_STATIC_HasObjectExpression_3(self, arg0, arg1, arg2));
};;

MetadataProvider.prototype['STATIC_HasAutomatismExpression'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return !!(_emscripten_bind_MetadataProvider_STATIC_HasAutomatismExpression_3(self, arg0, arg1, arg2));
};;

MetadataProvider.prototype['STATIC_HasStrExpression'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return !!(_emscripten_bind_MetadataProvider_STATIC_HasStrExpression_2(self, arg0, arg1));
};;

MetadataProvider.prototype['STATIC_HasObjectStrExpression'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return !!(_emscripten_bind_MetadataProvider_STATIC_HasObjectStrExpression_3(self, arg0, arg1, arg2));
};;

MetadataProvider.prototype['STATIC_HasAutomatismStrExpression'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return !!(_emscripten_bind_MetadataProvider_STATIC_HasAutomatismStrExpression_3(self, arg0, arg1, arg2));
};;

  MetadataProvider.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_MetadataProvider___destroy___0(self);
};
// EventsList
function EventsList() {
  this.ptr = _emscripten_bind_EventsList_EventsList_0();
  getCache(EventsList)[this.ptr] = this;
};;
EventsList.prototype = Object.create(WrapperObject.prototype);
EventsList.prototype.constructor = EventsList;
EventsList.prototype.__class__ = EventsList;
EventsList.__cache__ = {};
Module['EventsList'] = EventsList;

EventsList.prototype['InsertEvent'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return wrapPointer(_emscripten_bind_EventsList_InsertEvent_2(self, arg0, arg1), BaseEvent);
};;

EventsList.prototype['InsertNewEvent'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return wrapPointer(_emscripten_bind_EventsList_InsertNewEvent_3(self, arg0, arg1, arg2), BaseEvent);
};;

EventsList.prototype['InsertEvents'] = function(arg0, arg1, arg2, arg3) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  if (arg3 && typeof arg3 === 'object') arg3 = arg3.ptr;
  else arg3 = ensureString(arg3);
  _emscripten_bind_EventsList_InsertEvents_4(self, arg0, arg1, arg2, arg3);
};;

EventsList.prototype['GetEventAt'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_EventsList_GetEventAt_1(self, arg0), BaseEvent);
};;

EventsList.prototype['RemoveEventAt'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_EventsList_RemoveEventAt_1(self, arg0);
};;

EventsList.prototype['RemoveEvent'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_EventsList_RemoveEvent_1(self, arg0);
};;

EventsList.prototype['GetEventsCount'] = function() {
  var self = this.ptr;
  return _emscripten_bind_EventsList_GetEventsCount_0(self);
};;

EventsList.prototype['Contains'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return !!(_emscripten_bind_EventsList_Contains_2(self, arg0, arg1));
};;

EventsList.prototype['IsEmpty'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_EventsList_IsEmpty_0(self));
};;

EventsList.prototype['Clear'] = function() {
  var self = this.ptr;
  _emscripten_bind_EventsList_Clear_0(self);
};;

EventsList.prototype['SerializeTo'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_EventsList_SerializeTo_1(self, arg0);
};;

EventsList.prototype['UnserializeFrom'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_EventsList_UnserializeFrom_2(self, arg0, arg1);
};;

  EventsList.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_EventsList___destroy___0(self);
};
// ParameterMetadata
function ParameterMetadata() { throw "cannot construct a ParameterMetadata, no constructor in IDL" }
ParameterMetadata.prototype = Object.create(WrapperObject.prototype);
ParameterMetadata.prototype.constructor = ParameterMetadata;
ParameterMetadata.prototype.__class__ = ParameterMetadata;
ParameterMetadata.__cache__ = {};
Module['ParameterMetadata'] = ParameterMetadata;

ParameterMetadata.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ParameterMetadata_GetType_0(self));
};;

ParameterMetadata.prototype['GetExtraInfo'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ParameterMetadata_GetExtraInfo_0(self));
};;

ParameterMetadata.prototype['IsOptional'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ParameterMetadata_IsOptional_0(self));
};;

ParameterMetadata.prototype['GetDescription'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ParameterMetadata_GetDescription_0(self));
};;

ParameterMetadata.prototype['IsCodeOnly'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ParameterMetadata_IsCodeOnly_0(self));
};;

ParameterMetadata.prototype['GetDefaultValue'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ParameterMetadata_GetDefaultValue_0(self));
};;

ParameterMetadata.prototype['STATIC_IsObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_ParameterMetadata_STATIC_IsObject_1(self, arg0));
};;

  ParameterMetadata.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ParameterMetadata___destroy___0(self);
};
// Automatism
function Automatism() {
  this.ptr = _emscripten_bind_Automatism_Automatism_0();
  getCache(Automatism)[this.ptr] = this;
};;
Automatism.prototype = Object.create(WrapperObject.prototype);
Automatism.prototype.constructor = Automatism;
Automatism.prototype.__class__ = Automatism;
Automatism.__cache__ = {};
Module['Automatism'] = Automatism;

Automatism.prototype['Clone'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Automatism_Clone_0(self), Automatism);
};;

Automatism.prototype['SetName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Automatism_SetName_1(self, arg0);
};;

Automatism.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Automatism_GetName_0(self));
};;

Automatism.prototype['GetTypeName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Automatism_GetTypeName_0(self));
};;

Automatism.prototype['UpdateProperty'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return !!(_emscripten_bind_Automatism_UpdateProperty_3(self, arg0, arg1, arg2));
};;

Automatism.prototype['GetProperties'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Automatism_GetProperties_1(self, arg0), MapStringPropertyDescriptor);
};;

  Automatism.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Automatism___destroy___0(self);
};
// TextFormatting
function TextFormatting() { throw "cannot construct a TextFormatting, no constructor in IDL" }
TextFormatting.prototype = Object.create(WrapperObject.prototype);
TextFormatting.prototype.constructor = TextFormatting;
TextFormatting.prototype.__class__ = TextFormatting;
TextFormatting.__cache__ = {};
Module['TextFormatting'] = TextFormatting;

TextFormatting.prototype['IsBold'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_TextFormatting_IsBold_0(self));
};;

TextFormatting.prototype['IsItalic'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_TextFormatting_IsItalic_0(self));
};;

TextFormatting.prototype['GetColorRed'] = function() {
  var self = this.ptr;
  return _emscripten_bind_TextFormatting_GetColorRed_0(self);
};;

TextFormatting.prototype['GetColorGreen'] = function() {
  var self = this.ptr;
  return _emscripten_bind_TextFormatting_GetColorGreen_0(self);
};;

TextFormatting.prototype['GetColorBlue'] = function() {
  var self = this.ptr;
  return _emscripten_bind_TextFormatting_GetColorBlue_0(self);
};;

  TextFormatting.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_TextFormatting___destroy___0(self);
};
// Point
function Point(arg0) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  this.ptr = _emscripten_bind_Point_Point_1(arg0);
  getCache(Point)[this.ptr] = this;
};;
Point.prototype = Object.create(WrapperObject.prototype);
Point.prototype.constructor = Point;
Point.prototype.__class__ = Point;
Point.__cache__ = {};
Module['Point'] = Point;

Point.prototype['SetName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Point_SetName_1(self, arg0);
};;

Point.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Point_GetName_0(self));
};;

Point.prototype['SetXY'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_Point_SetXY_2(self, arg0, arg1);
};;

Point.prototype['GetX'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Point_GetX_0(self);
};;

Point.prototype['SetX'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Point_SetX_1(self, arg0);
};;

Point.prototype['GetY'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Point_GetY_0(self);
};;

Point.prototype['SetY'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Point_SetY_1(self, arg0);
};;

  Point.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Point___destroy___0(self);
};
// ExpressionMetadata
function ExpressionMetadata() { throw "cannot construct a ExpressionMetadata, no constructor in IDL" }
ExpressionMetadata.prototype = Object.create(WrapperObject.prototype);
ExpressionMetadata.prototype.constructor = ExpressionMetadata;
ExpressionMetadata.prototype.__class__ = ExpressionMetadata;
ExpressionMetadata.__cache__ = {};
Module['ExpressionMetadata'] = ExpressionMetadata;

ExpressionMetadata.prototype['GetFullName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ExpressionMetadata_GetFullName_0(self));
};;

ExpressionMetadata.prototype['GetDescription'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ExpressionMetadata_GetDescription_0(self));
};;

ExpressionMetadata.prototype['GetGroup'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ExpressionMetadata_GetGroup_0(self));
};;

ExpressionMetadata.prototype['GetSmallIconFilename'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ExpressionMetadata_GetSmallIconFilename_0(self));
};;

ExpressionMetadata.prototype['IsShown'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ExpressionMetadata_IsShown_0(self));
};;

ExpressionMetadata.prototype['GetParameter'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_ExpressionMetadata_GetParameter_1(self, arg0), ParameterMetadata);
};;

ExpressionMetadata.prototype['GetParametersCount'] = function() {
  var self = this.ptr;
  return _emscripten_bind_ExpressionMetadata_GetParametersCount_0(self);
};;

  ExpressionMetadata.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ExpressionMetadata___destroy___0(self);
};
// ObjectMetadata
function ObjectMetadata() { throw "cannot construct a ObjectMetadata, no constructor in IDL" }
ObjectMetadata.prototype = Object.create(WrapperObject.prototype);
ObjectMetadata.prototype.constructor = ObjectMetadata;
ObjectMetadata.prototype.__class__ = ObjectMetadata;
ObjectMetadata.__cache__ = {};
Module['ObjectMetadata'] = ObjectMetadata;

ObjectMetadata.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ObjectMetadata_GetName_0(self));
};;

ObjectMetadata.prototype['GetFullName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ObjectMetadata_GetFullName_0(self));
};;

ObjectMetadata.prototype['GetDescription'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ObjectMetadata_GetDescription_0(self));
};;

ObjectMetadata.prototype['GetIconFilename'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ObjectMetadata_GetIconFilename_0(self));
};;

  ObjectMetadata.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ObjectMetadata___destroy___0(self);
};
// EventsParametersLister
function EventsParametersLister(arg0) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  this.ptr = _emscripten_bind_EventsParametersLister_EventsParametersLister_1(arg0);
  getCache(EventsParametersLister)[this.ptr] = this;
};;
EventsParametersLister.prototype = Object.create(WrapperObject.prototype);
EventsParametersLister.prototype.constructor = EventsParametersLister;
EventsParametersLister.prototype.__class__ = EventsParametersLister;
EventsParametersLister.__cache__ = {};
Module['EventsParametersLister'] = EventsParametersLister;

EventsParametersLister.prototype['GetParametersAndTypes'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_EventsParametersLister_GetParametersAndTypes_0(self), MapStringString);
};;

EventsParametersLister.prototype['Launch'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_EventsParametersLister_Launch_1(self, arg0);
};;

  EventsParametersLister.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_EventsParametersLister___destroy___0(self);
};
// AutomatismMetadata
function AutomatismMetadata() { throw "cannot construct a AutomatismMetadata, no constructor in IDL" }
AutomatismMetadata.prototype = Object.create(WrapperObject.prototype);
AutomatismMetadata.prototype.constructor = AutomatismMetadata;
AutomatismMetadata.prototype.__class__ = AutomatismMetadata;
AutomatismMetadata.__cache__ = {};
Module['AutomatismMetadata'] = AutomatismMetadata;

AutomatismMetadata.prototype['GetFullName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_AutomatismMetadata_GetFullName_0(self));
};;

AutomatismMetadata.prototype['GetDefaultName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_AutomatismMetadata_GetDefaultName_0(self));
};;

AutomatismMetadata.prototype['GetDescription'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_AutomatismMetadata_GetDescription_0(self));
};;

AutomatismMetadata.prototype['GetGroup'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_AutomatismMetadata_GetGroup_0(self));
};;

AutomatismMetadata.prototype['GetIconFilename'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_AutomatismMetadata_GetIconFilename_0(self));
};;

  AutomatismMetadata.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_AutomatismMetadata___destroy___0(self);
};
// InstructionMetadata
function InstructionMetadata() { throw "cannot construct a InstructionMetadata, no constructor in IDL" }
InstructionMetadata.prototype = Object.create(WrapperObject.prototype);
InstructionMetadata.prototype.constructor = InstructionMetadata;
InstructionMetadata.prototype.__class__ = InstructionMetadata;
InstructionMetadata.__cache__ = {};
Module['InstructionMetadata'] = InstructionMetadata;

InstructionMetadata.prototype['GetFullName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_InstructionMetadata_GetFullName_0(self));
};;

InstructionMetadata.prototype['GetDescription'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_InstructionMetadata_GetDescription_0(self));
};;

InstructionMetadata.prototype['GetSentence'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_InstructionMetadata_GetSentence_0(self));
};;

InstructionMetadata.prototype['GetGroup'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_InstructionMetadata_GetGroup_0(self));
};;

InstructionMetadata.prototype['GetIconFilename'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_InstructionMetadata_GetIconFilename_0(self));
};;

InstructionMetadata.prototype['GetSmallIconFilename'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_InstructionMetadata_GetSmallIconFilename_0(self));
};;

InstructionMetadata.prototype['CanHaveSubInstructions'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_InstructionMetadata_CanHaveSubInstructions_0(self));
};;

InstructionMetadata.prototype['SetCanHaveSubInstructions'] = function() {
  var self = this.ptr;
  _emscripten_bind_InstructionMetadata_SetCanHaveSubInstructions_0(self);
};;

InstructionMetadata.prototype['GetParameter'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_InstructionMetadata_GetParameter_1(self, arg0), ParameterMetadata);
};;

InstructionMetadata.prototype['GetParametersCount'] = function() {
  var self = this.ptr;
  return _emscripten_bind_InstructionMetadata_GetParametersCount_0(self);
};;

InstructionMetadata.prototype['GetUsageComplexity'] = function() {
  var self = this.ptr;
  return _emscripten_bind_InstructionMetadata_GetUsageComplexity_0(self);
};;

InstructionMetadata.prototype['IsHidden'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_InstructionMetadata_IsHidden_0(self));
};;

  InstructionMetadata.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_InstructionMetadata___destroy___0(self);
};
// TextObject
function TextObject(arg0) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  this.ptr = _emscripten_bind_TextObject_TextObject_1(arg0);
  getCache(TextObject)[this.ptr] = this;
};;
TextObject.prototype = Object.create(WrapperObject.prototype);
TextObject.prototype.constructor = TextObject;
TextObject.prototype.__class__ = TextObject;
TextObject.__cache__ = {};
Module['TextObject'] = TextObject;

TextObject.prototype['SetString'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TextObject_SetString_1(self, arg0);
};;

TextObject.prototype['GetString'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_TextObject_GetString_0(self));
};;

TextObject.prototype['SetCharacterSize'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TextObject_SetCharacterSize_1(self, arg0);
};;

TextObject.prototype['GetCharacterSize'] = function() {
  var self = this.ptr;
  return _emscripten_bind_TextObject_GetCharacterSize_0(self);
};;

TextObject.prototype['SetFontFilename'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TextObject_SetFontFilename_1(self, arg0);
};;

TextObject.prototype['GetFontFilename'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_TextObject_GetFontFilename_0(self));
};;

TextObject.prototype['IsBold'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_TextObject_IsBold_0(self));
};;

TextObject.prototype['SetBold'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TextObject_SetBold_1(self, arg0);
};;

TextObject.prototype['IsItalic'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_TextObject_IsItalic_0(self));
};;

TextObject.prototype['SetItalic'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TextObject_SetItalic_1(self, arg0);
};;

TextObject.prototype['IsUnderlined'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_TextObject_IsUnderlined_0(self));
};;

TextObject.prototype['SetUnderlined'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TextObject_SetUnderlined_1(self, arg0);
};;

TextObject.prototype['SetColor'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  _emscripten_bind_TextObject_SetColor_3(self, arg0, arg1, arg2);
};;

TextObject.prototype['GetColorR'] = function() {
  var self = this.ptr;
  return _emscripten_bind_TextObject_GetColorR_0(self);
};;

TextObject.prototype['GetColorG'] = function() {
  var self = this.ptr;
  return _emscripten_bind_TextObject_GetColorG_0(self);
};;

TextObject.prototype['GetColorB'] = function() {
  var self = this.ptr;
  return _emscripten_bind_TextObject_GetColorB_0(self);
};;

TextObject.prototype['Clone'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_TextObject_Clone_0(self), gdObject);
};;

TextObject.prototype['SetName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TextObject_SetName_1(self, arg0);
};;

TextObject.prototype['GetName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_TextObject_GetName_0(self));
};;

TextObject.prototype['SetType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TextObject_SetType_1(self, arg0);
};;

TextObject.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_TextObject_GetType_0(self));
};;

TextObject.prototype['GetVariables'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_TextObject_GetVariables_0(self), VariablesContainer);
};;

TextObject.prototype['GetAllAutomatismNames'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_TextObject_GetAllAutomatismNames_0(self), VectorString);
};;

TextObject.prototype['HasAutomatismNamed'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_TextObject_HasAutomatismNamed_1(self, arg0));
};;

TextObject.prototype['AddNewAutomatism'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return wrapPointer(_emscripten_bind_TextObject_AddNewAutomatism_3(self, arg0, arg1, arg2), Automatism);
};;

TextObject.prototype['GetAutomatism'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_TextObject_GetAutomatism_1(self, arg0), Automatism);
};;

TextObject.prototype['RemoveAutomatism'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TextObject_RemoveAutomatism_1(self, arg0);
};;

TextObject.prototype['RenameAutomatism'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return !!(_emscripten_bind_TextObject_RenameAutomatism_2(self, arg0, arg1));
};;

TextObject.prototype['SerializeTo'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TextObject_SerializeTo_1(self, arg0);
};;

TextObject.prototype['UnserializeFrom'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_TextObject_UnserializeFrom_2(self, arg0, arg1);
};;

  TextObject.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_TextObject___destroy___0(self);
};
// StandardEvent
function StandardEvent() {
  this.ptr = _emscripten_bind_StandardEvent_StandardEvent_0();
  getCache(StandardEvent)[this.ptr] = this;
};;
StandardEvent.prototype = Object.create(WrapperObject.prototype);
StandardEvent.prototype.constructor = StandardEvent;
StandardEvent.prototype.__class__ = StandardEvent;
StandardEvent.__cache__ = {};
Module['StandardEvent'] = StandardEvent;

StandardEvent.prototype['GetConditions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_StandardEvent_GetConditions_0(self), InstructionsList);
};;

StandardEvent.prototype['GetActions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_StandardEvent_GetActions_0(self), InstructionsList);
};;

StandardEvent.prototype['Clone'] = function() {
  var self = this.ptr;
  _emscripten_bind_StandardEvent_Clone_0(self);
};;

StandardEvent.prototype['GetType'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_StandardEvent_GetType_0(self));
};;

StandardEvent.prototype['SetType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_StandardEvent_SetType_1(self, arg0);
};;

StandardEvent.prototype['IsExecutable'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_StandardEvent_IsExecutable_0(self));
};;

StandardEvent.prototype['CanHaveSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_StandardEvent_CanHaveSubEvents_0(self));
};;

StandardEvent.prototype['HasSubEvents'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_StandardEvent_HasSubEvents_0(self));
};;

StandardEvent.prototype['GetSubEvents'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_StandardEvent_GetSubEvents_0(self), EventsList);
};;

StandardEvent.prototype['IsDisabled'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_StandardEvent_IsDisabled_0(self));
};;

StandardEvent.prototype['SetDisabled'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_StandardEvent_SetDisabled_1(self, arg0);
};;

StandardEvent.prototype['IsFolded'] = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_StandardEvent_IsFolded_0(self));
};;

StandardEvent.prototype['SetFolded'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_StandardEvent_SetFolded_1(self, arg0);
};;

  StandardEvent.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_StandardEvent___destroy___0(self);
};
// MapStringString
function MapStringString() { throw "cannot construct a MapStringString, no constructor in IDL" }
MapStringString.prototype = Object.create(WrapperObject.prototype);
MapStringString.prototype.constructor = MapStringString;
MapStringString.prototype.__class__ = MapStringString;
MapStringString.__cache__ = {};
Module['MapStringString'] = MapStringString;

MapStringString.prototype['MAP_get'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return Pointer_stringify(_emscripten_bind_MapStringString_MAP_get_1(self, arg0));
};;

MapStringString.prototype['MAP_set'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_MapStringString_MAP_set_2(self, arg0, arg1);
};;

MapStringString.prototype['MAP_has'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return !!(_emscripten_bind_MapStringString_MAP_has_1(self, arg0));
};;

MapStringString.prototype['MAP_keys'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_MapStringString_MAP_keys_0(self), VectorString);
};;

  MapStringString.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_MapStringString___destroy___0(self);
};
(function() {
  function setupEnums() {
    
  }
  if (Module['calledRun']) setupEnums();
  else addOnPreMain(setupEnums);
})();