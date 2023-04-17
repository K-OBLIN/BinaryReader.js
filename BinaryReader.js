/**
 * Reads primitive data types as binary values.
 */
class BinaryReader {
    /**
     * Constructor
     */
    constructor() {
        this.Offset = 0;                        /**< Current Position */
        this.Datas = null;
    };
    
    /**
     * Read data.
     * @param {Array} dataArr Data Array
     */
    ReadData(dataArr) {
        this.Offset = 0;
        this.Datas = dataArr;
    };

    /**
     * Read data from 'offset' to 'numberOfBytes'
     * @param {Number} offset offset
     * @param {Number} numberOfBytes Number Of Bytes To read
     * @returns {Number} Hexadecimal
     */
    ReadDataFromOffset(offset, numberOfBytes) {
        if (offset < 0 || numberOfBytes < 0) { throw new Error('Please set the value to 0 or higher.'); }

        let result = 0;

        for (let i = 0; i < numberOfBytes; i++) {
            result |= this.Datas[offset + i] << (i << 3);
        }

        return result;
    };

    /**
     * Read data
     * @param {Number} numberOfBytes Number Of Bytes To Read
     * @returns {Number} Hexadecimal
     */
    ReadDataFromBytes(numberOfBytes) {
        if (numberOfBytes < 0) { throw new Error('Please set the value to 0 or higher.'); }

        let result = 0;
        
        for (let i = 0; i < numberOfBytes; i++) {
            result |= this.Datas[this.Offset] << (i << 3);
            this.Offset += 1;
        }
            
        return result;
    };
};
