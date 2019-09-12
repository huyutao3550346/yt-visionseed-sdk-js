/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.SystemStatusResult', null, global);

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
proto.SystemStatusResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SystemStatusResult.repeatedFields_, null);
};
goog.inherits(proto.SystemStatusResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SystemStatusResult.displayName = 'proto.SystemStatusResult';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SystemStatusResult.repeatedFields_ = [2,3];



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
proto.SystemStatusResult.prototype.toObject = function(opt_includeInstance) {
  return proto.SystemStatusResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SystemStatusResult} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SystemStatusResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    heartbeatid: jspb.Message.getField(msg, 1),
    temperaturesList: jspb.Message.getRepeatedFloatingPointField(msg, 2),
    powersList: jspb.Message.getRepeatedFloatingPointField(msg, 3),
    freeheap: jspb.Message.getField(msg, 4)
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
 * @return {!proto.SystemStatusResult}
 */
proto.SystemStatusResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SystemStatusResult;
  return proto.SystemStatusResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SystemStatusResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SystemStatusResult}
 */
proto.SystemStatusResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeartbeatid(value);
      break;
    case 2:
      var value = /** @type {!Array.<number>} */ (reader.readPackedFloat());
      msg.setTemperaturesList(value);
      break;
    case 3:
      var value = /** @type {!Array.<number>} */ (reader.readPackedFloat());
      msg.setPowersList(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFreeheap(value);
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
 * @param {!proto.SystemStatusResult} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SystemStatusResult.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SystemStatusResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SystemStatusResult.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(this, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getTemperaturesList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
  f = this.getPowersList();
  if (f.length > 0) {
    writer.writePackedFloat(
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
 * required int32 heartBeatId = 1;
 * @return {number}
 */
proto.SystemStatusResult.prototype.getHeartbeatid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SystemStatusResult.prototype.setHeartbeatid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SystemStatusResult.prototype.clearHeartbeatid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SystemStatusResult.prototype.hasHeartbeatid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated float temperatures = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.SystemStatusResult.prototype.getTemperaturesList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/** @param {!Array.<number>} value */
proto.SystemStatusResult.prototype.setTemperaturesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.SystemStatusResult.prototype.addTemperatures = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.SystemStatusResult.prototype.clearTemperaturesList = function() {
  this.setTemperaturesList([]);
};


/**
 * repeated float powers = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.SystemStatusResult.prototype.getPowersList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/** @param {!Array.<number>} value */
proto.SystemStatusResult.prototype.setPowersList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.SystemStatusResult.prototype.addPowers = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.SystemStatusResult.prototype.clearPowersList = function() {
  this.setPowersList([]);
};


/**
 * required int32 freeHeap = 4;
 * @return {number}
 */
proto.SystemStatusResult.prototype.getFreeheap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.SystemStatusResult.prototype.setFreeheap = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SystemStatusResult.prototype.clearFreeheap = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SystemStatusResult.prototype.hasFreeheap = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto);