/**
 * Get the current time in 12-hour format with AM/PM
 * @returns string in format "6:42 PM" or "6:42 AM"
 */
export function getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Convert to 12-hour format
    const hours12 = hours % 12 || 12;
    
    // Get AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Format minutes with leading zero if needed
    const formattedMinutes = minutes.toString().padStart(2, '0');
    
    return `${hours12}:${formattedMinutes} ${ampm}`;
    }

    /**
     * Get the current time and update it every second
     * @param callback Function to call with the current time
     * @returns Function to stop the timer
     */
    export function startTimeUpdate(callback: (time: string) => void): () => void {
    // Initial call
    callback(getCurrentTime());
    
    // Set up interval to update every second
    const interval = setInterval(() => {
        callback(getCurrentTime());
    }, 1000);
    
    // Return function to stop the timer
    return () => clearInterval(interval);
} 