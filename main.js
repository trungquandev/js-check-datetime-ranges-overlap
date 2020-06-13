/**
 * Created by trungquandev.com's author on 09/06/2020.
 * main.js
 */

/**
 * - Function check overlap giữa 2 khoảng thời gian
 * Input:
 * @param {*} incommingDateTimeRange {start: number, end: number}
 * @param {*} existingDateTimeRange {start: number, end: number}
 * 
 * Output:
 * - Boolean: true or false
 */
function areTwoDateTimeRangesOverlapping(incommingDateTimeRange, existingDateTimeRange) {
  return incommingDateTimeRange.start < existingDateTimeRange.end && incommingDateTimeRange.end > existingDateTimeRange.start
}

/**
 * - Function check overlap giữa nhiều khoảng thời gian
 * Input:
 * @param {*} incommingDateTimeRange {start: number, end: number}
 * @param {*} existingDateTimeRanges [{start: number, end: number}, {start: number, end: number}]
 * 
 * Output:
 * - Boolean true or false
 */
function areManyDateTimeRangesOverlapping(incommingDateTimeRange, existingDateTimeRanges) {
  return existingDateTimeRanges.some((existingDateTimeRange) => areTwoDateTimeRangesOverlapping(incommingDateTimeRange, existingDateTimeRange))
}

// Tạo data để test 2 function trên:

/** Date Range A: Thứ 3 ngày 09 tháng 6 năm 2020 lúc 14h đến 14h30 chiều */
const startDateTimeRangeA = new Date('Tue Jun 09 2020 14:00:00 GMT+0700 (Indochina Time)')
const endDateTimeRangeA = new Date('Tue Jun 09 2020 14:30:00 GMT+0700 (Indochina Time)')
const dateTimeRangeA = {
  start: startDateTimeRangeA.getTime(),
  end: endDateTimeRangeA.getTime()
}
/** Date Range B: Thứ 3 ngày 09 tháng 6 năm 2020 lúc 15h đến 15h30 chiều */
const startDateTimeRangeB = new Date('Tue Jun 09 2020 15:00:00 GMT+0700 (Indochina Time)')
const endDateTimeRangeB = new Date('Tue Jun 09 2020 15:30:00 GMT+0700 (Indochina Time)')
const dateTimeRangeB = {
  start: startDateTimeRangeB.getTime(),
  end: endDateTimeRangeB.getTime()
}
/** Date Range C: Thứ 3 ngày 09 tháng 6 năm 2020 lúc 15h30 đến 16h00 chiều */
const startDateTimeRangeC = new Date('Tue Jun 09 2020 15:30:00 GMT+0700 (Indochina Time)')
const endDateTimeRangeC = new Date('Tue Jun 09 2020 16:00:00 GMT+0700 (Indochina Time)')
const dateTimeRangeC = {
  start: startDateTimeRangeC.getTime(),
  end: endDateTimeRangeC.getTime()
}
/** Date Range D: Thứ 3 ngày 09 tháng 6 năm 2020 lúc 15h45 đến 17h00 chiều */
const startDateTimeRangeD = new Date('Tue Jun 09 2020 15:45:00 GMT+0700 (Indochina Time)')
const endDateTimeRangeD = new Date('Tue Jun 09 2020 17:00:00 GMT+0700 (Indochina Time)')
const dateTimeRangeD = {
  start: startDateTimeRangeD.getTime(),
  end: endDateTimeRangeD.getTime()
}

// Kiểm tra A với B: kết quả sẽ không overlap
const checkAB = areTwoDateTimeRangesOverlapping(dateTimeRangeA, dateTimeRangeB)
console.log(`* A và B có overlap không? => ${checkAB}`) // Expected output: false

// Kiểm tra C với D: sẽ bị overlap vì trùng một điểm biên 14h30 (tuỳ vào spec mà các bạn có thể lấy tuyệt đối điểm biên độ hoặc không bằng cách thay dấu lớn hơn thành lớn hơn hoặc bằng trong function)
const checkCD = areTwoDateTimeRangesOverlapping(dateTimeRangeC, dateTimeRangeD)
console.log(`* C và D có overlap không? => ${checkCD}`) // Expected output: true

// Kiểm tra D với [A, B, C]: sẽ bị overlap ở 2 khoảng D với C
const checkABCD = areManyDateTimeRangesOverlapping(dateTimeRangeD, [dateTimeRangeA, dateTimeRangeB, dateTimeRangeC])
console.log(`* 4 khoảng A, B, C và D có overlap không? => ${checkABCD}`) // Expected output: true
//