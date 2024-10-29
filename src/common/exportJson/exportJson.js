export const downloadJSON = (data, title) => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `-data.json`;
    link.click();
    URL.revokeObjectURL(url);
};