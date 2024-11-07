// json2html.js
export default function json2html(data) {
    // Create the headers dynamically based on the data's keys
    const headers = Array.from(new Set(data.flatMap(Object.keys)));

    // Start the HTML table
    let table = `<table data-user="vaishnavi10106@gmail.com"><thead><tr>`;
    
    // Add headers to the table
    headers.forEach(header => {
        table += `<th>${header}</th>`;
    });
    table += `</tr></thead><tbody>`;

    // Add rows to the table
    data.forEach(row => {
        table += `<tr>`;
        headers.forEach(header => {
            // Add the value from the row, or an empty string if the key doesn't exist
            table += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
        });
        table += `</tr>`;
    });

    table += `</tbody></table>`;
    return table;
}
