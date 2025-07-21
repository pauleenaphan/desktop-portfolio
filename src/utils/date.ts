/**
 * Get the current date in M/D/YYYY format
 * @returns string in format "7/23/2002"
 */
export function getCurrentDate(): string {
    const now = new Date();
    const month = now.getMonth() + 1; // getMonth() returns 0-11, so add 1
    const day = now.getDate();
    const year = now.getFullYear();
    
    return `${month}/${day}/${year}`;
} 