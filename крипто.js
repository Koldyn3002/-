document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            // Нажата левая стрелка
            document.querySelector('.poloska').style.opacity = '0.5'; // Задаем прозрачность 0.5 для левой стрелки
        } else if (event.key === 'ArrowRight') {
            // Нажата правая стрелка
            document.querySelector('.poloska').style.opacity = '0.2'; // Задаем прозрачность 0.2 для правой стрелки
        }
    });
    document.addEventListener('keydown', function(event) {
            const numberElement = document.querySelector('.number');
            if (event.key === 'ArrowLeft') {
                // Нажата левая стрелка
                document.querySelector('.poloska').style.opacity = '0.5'; // Задаем прозрачность 0.5 для левой стрелки
                numberElement.textContent = '1'; // Отображаем цифру 1
            } else if (event.key === 'ArrowRight') {
                // Нажата правая стрелка
                document.querySelector('.poloska').style.opacity = '0.2'; // Задаем прозрачность 0.2 для правой стрелки
                numberElement.textContent = '2'; // Отображаем цифру 2
            }
        });