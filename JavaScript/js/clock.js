const username = "Halil"; 
        document.getElementById('myName').textContent = username;

        // Saat ve Tarih Fonksiyonu
        function updateTime() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const dayNames = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
            const dayName = dayNames[now.getDay()];
            const timeString = `${hours}:${minutes}:${seconds} ${dayName}`;
            document.getElementById('myClock').textContent = timeString;

            const dateString = now.toLocaleDateString('tr-TR');
            document.getElementById('date').textContent = dateString;
        }

        // İlk zaman güncellemesi ve her saniyede bir güncelleme
        updateTime();
        setInterval(updateTime, 1000);