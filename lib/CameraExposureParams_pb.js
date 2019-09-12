/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.CameraExposureParams', null, global);
goog.exportSymbol('proto.CameraExposureParams.ExposureType', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CameraExposureParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CameraExposureParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CameraExposureParams.displayName = 'proto.CameraExposureParams';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CameraExposureParams.prototype.toObject = function(opt_includeInstance) {
  return proto.CameraExposureParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CameraExposureParams} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CameraExposureParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2),
    timeus: jspb.Message.getField(msg, 3),
    gain: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CameraExposureParams}
 */
proto.CameraExposureParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CameraExposureParams;
  return proto.CameraExposureParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CameraExposureParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CameraExposureParams}
 */
proto.CameraExposureParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {!proto.CameraExposureParams.ExposureType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimeus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CameraExposureParams} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CameraExposureParams.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CameraExposureParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CameraExposureParams.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(this, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.CameraExposureParams.ExposureType} */ (jspb.Message.getField(this, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * required int32 camId = 1;
 * @return {number}
 */
proto.CameraExposureParams.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.CameraExposureParams.prototype.setCamid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.CameraExposureParams.prototype.clearCamid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CameraExposureParams.prototype.hasCamid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required ExposureType type = 2;
 * @return {!proto.CameraExposureParams.ExposureType}
 */
proto.CameraExposureParams.prototype.getType = function() {
  return /** @type {!proto.CameraExposureParams.ExposureType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.CameraExposureParams.ExposureType} value */
proto.CameraExposureParams.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.CameraExposureParams.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CameraExposureParams.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 timeUs = 3;
 * @return {number}
 */
proto.CameraExposureParams.prototype.getTimeus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.CameraExposureParams.prototype.setTimeus = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.CameraExposureParams.prototype.clearTimeus = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CameraExposureParams.prototype.hasTimeus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 gain = 4;
 * @return {number}
 */
proto.CameraExposureParams.prototype.getGain = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.CameraExposureParams.prototype.setGain = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.CameraExposureParams.prototype.clearGain = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.CameraExposureParams.prototype.hasGain = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * @enum {number}
 */
proto.CameraExposureParams.ExposureType = {
  MANUAL: 0,
  AUTO: 1
};

goog.object.extend(exports, proto);