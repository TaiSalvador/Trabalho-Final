document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        dateClick: function (info) {
            const selectedDate = info.dateStr;
            document.getElementById('data').value = selectedDate; // Adicione o valor da data no campo
            alert(`Data selecionada: ${selectedDate}`);
        },
        selectable: true,
        events: [] // Aqui você pode adicionar eventos de agendamento se necessário
    });
    calendar.render();
});
