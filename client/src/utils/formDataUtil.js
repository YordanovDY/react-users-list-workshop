export function getFormData(event) {
    const formData = new FormData(event.target);
    return Object.fromEntries(formData);
}