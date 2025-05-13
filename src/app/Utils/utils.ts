export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert(`Copied to clipboard: ${text}`);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
}