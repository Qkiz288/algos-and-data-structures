const pivotHelper = require('../../pivot/pivotHelper');

module.exports = function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        const pivotIndex = pivotHelper(array, left, right);

        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
}