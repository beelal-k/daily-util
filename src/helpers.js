// src/helpers.js

/**
 * Parses a string/Date to a readable format
 * @param {string | Date} date 
 * @returns {Date}
 */
export function toReadableDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    })
}
/**
 * capitalizes the first letter of a string
 * @param {string} text 
 * @returns {string}
 */

export function capitalizeFirstLetter(text) {
    return text?.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Checks if a date has passed
 * @param {Date} date 
 * @returns {boolean}
 */

export function hasDatePassed(date) {
    const dateToCheck = new Date(date);
    const today = new Date();
    if (dateToCheck <= today) {
        return true;
    } else {
        return false;
    }
}
/**
 * capitalizes the first letter of each word in a string and replaces all hyphens with spaces
 * @param {string} str
 * @returns {string}
 */

export function capitalizeAndReplace() {
    return str.replace(/(?:^|-)\w/g, function (match) {
        return match.toUpperCase();
    }).replace(/-/g, " ");
}

/**
 * calculates the price after discount
 * @param {number} price 
 * @param {number} discount 
 * @returns {number} 
 */
export const itemPriceAfterDiscount = (price, discount) => {
    return price - (price * discount) / 100;
};

/**
 * display the time in hh:mm:ss format
 * @param {Date} date 
 * @returns {string} 
 */
export function toStringTime(date) {

    const hours = date?.getHours().toString().padStart(2, '0');
    const min = date?.getMinutes().toString().padStart(2, '0');
    const sec = date?.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${min}:${sec}`;

    return timeString;
}

