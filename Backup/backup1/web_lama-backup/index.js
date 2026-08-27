const startYear = 2025;
const currentYear = new Date().getFullYear();

const text =
    currentYear === startYear
        ? `©${startYear} Rivaldo Nainggolan.`
        : `©${startYear}-${currentYear} Rivaldo Nainggolan.`;

document.getElementById("copyright").textContent = text;