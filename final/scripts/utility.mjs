// wrap function by chatgpt
export function wrap(n, max) {
    return ((n % max) + max) % max;
}

export async function loadData(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

        const data = await response.json();

        return { error: false, message: "success", data: data };
    }
    catch (error) {
        const message = `Failed to load ${file}: ${error.message}`;
        console.error(message);
        return { error: true, message: message, data: null };
    }
}