import debounce  from './debounce.js';

// Función que queremos ejecutar después del debounce
function updateUI(value: string): void {
    const lastValue: HTMLElement | null = document.getElementById('lastValue');
    const executionCount: HTMLElement | null = document.getElementById('executionCount');
    let count: number = 0;

    if (lastValue) {
        lastValue.textContent = value;
    }

    if (executionCount) {
        count = parseInt(executionCount.textContent || '0', 10);
        count++;
        executionCount.textContent = count.toString();
    }
}

// Cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const inputDebounce: HTMLInputElement | null = document.getElementById('inputDebounce') as HTMLInputElement;

    if (inputDebounce) {
        // Aplicar debounce al evento input del elemento inputDebounce
        inputDebounce.addEventListener('input', debounce((event: Event) => {
            const target = event.target as HTMLInputElement;
            updateUI(target.value);
        }, 1000)); // 1 segundo (1000 milisegundos) de espera
    }
});
