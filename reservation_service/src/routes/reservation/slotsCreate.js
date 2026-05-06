export function slotsCreate(service, reservs, chosen_day) {

    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10);

    if (chosen_day < todayStr) {
        return [];
    }


    days_config = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        0: "Sunday",
    }
    const looking_day = (new Date(chosen_day)).getDay();;
    if (!service.working_days.includes(days_config[looking_day])) {
        console.log(service.working_days);
        console.log(looking_day);
        //console.log(days_config[looking_day]);
        return [];
    }


    function toMinutes(time) {
        const [h, m] = time.split(":").map(Number);
        return h * 60 + m
    }

    function toTime(minutes) {
        const h = String(Math.floor(minutes / 60)).padStart(2, '0');
        const m = String(minutes % 60).padStart(2, '0');
        return `${h}:${m}`;
    }

    function isOverlap(aStart, aEnd, bStart, bEnd) {
        return aStart < bEnd && aEnd > bStart;
    }

    function generateSlots(start, end, duration) {
        const startMin = toMinutes(start);
        const endMin = toMinutes(end);
        const durationMin = toMinutes(duration);

        const slots = [];

        for (let t = startMin; t + durationMin <= endMin; t += durationMin) {
            slots.push({
            start: t,
            end: t + durationMin
            });
        }

        return slots;
    }

    function getAvailableSlots(service, reservations) {
        const slots = generateSlots(
            service.hour_start,
            service.hour_end,
            service.slot_duration
        );

    const reservationsMin = reservations.map(r => ({
        start: toMinutes(r.reservation_starts.split(' ')[1]),
        end: toMinutes(r.reservation_ends.split(' ')[1])
    }));

    
    

    let freeSlots = slots.filter(slot => {
        return !reservationsMin.some(res =>
        isOverlap(slot.start, slot.end, res.start, res.end)
        );
    });

    if (chosen_day === todayStr) {
        const nowMinutes = today.getHours() * 60 + today.getMinutes();

        freeSlots = freeSlots.filter(slot => {
            return slot.start > nowMinutes;
        });
    }

    return freeSlots.map(slot => ({
        start: toTime(slot.start),
        end: toTime(slot.end)
    }));
    }

    const slots_get = getAvailableSlots(service, reservs)
    return slots_get

}