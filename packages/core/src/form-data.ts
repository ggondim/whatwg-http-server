import { TypeXOR } from 'ts-advanced-types';

/**
 * Form-data part as a key-value pair
 * @interface FormDataValue
 */
export interface FormDataValue {
  /**
   * Key name of the form-data part
   * @type {string}
   * @memberof FormDataValue
   */
  name: string,
  /**
   * String value of the form-data part
   * @type {string}
   * @memberof FormDataValue
   */
  value: string,
};

/**
 * Form-data part as a file
 * @interface FormDataFile
 */
export interface FormDataFile {
  /**
   * Flag indicating the form-data part is a file
   *
   * @type {true}
   * @memberof FormDataFile
   */
  isFile: true,
  /**
   * Original filename.
   * @type {string}
   * @memberof FormDataFile
   */
  filename: string,
  /**
   * File media type.
   * @type {string}
   * @memberof FormDataFile
   */
  type: string,
  /**
   * File contents as binary data.
   * @type {Buffer}
   * @memberof FormDataFile
   */
  data: Buffer
};

/**
 * @typedef {TypeXOR<FormDataValue, FormDataFile>} FormDataPart
 */

/**
 * Form-data part
 */
export type FormDataEntry = TypeXOR<FormDataValue, FormDataFile>;
