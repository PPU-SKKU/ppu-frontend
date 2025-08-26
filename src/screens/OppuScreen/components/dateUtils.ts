export type CalendarDay = {
  date: Date;
  label: number;
  isCurrentMonth: boolean;
};

export type Week = CalendarDay[];

export function getMonthStart(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function getMonthEnd(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

export function isSameDay(a?: Date, b?: Date): boolean {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function buildWeeksForMonth(monthDate: Date): Week[] {
  const startOfMonth = getMonthStart(monthDate);
  const endOfMonth = getMonthEnd(monthDate);

  const firstVisible = new Date(startOfMonth);
  firstVisible.setDate(startOfMonth.getDate() - startOfMonth.getDay());

  const lastVisible = new Date(endOfMonth);
  lastVisible.setDate(endOfMonth.getDate() + (6 - endOfMonth.getDay()));

  const weeks: Week[] = [];
  let cursor = new Date(firstVisible);

  while (cursor <= lastVisible) {
    const week: Week = [];
    for (let i = 0; i < 7; i += 1) {
      week.push({
        date: new Date(cursor),
        label: cursor.getDate(),
        isCurrentMonth: cursor.getMonth() === monthDate.getMonth(),
      });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }

  return weeks;
}
