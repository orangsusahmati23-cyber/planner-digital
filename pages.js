// ==========================================
// DEFINISI 100 HALAMAN PLANNER
// ==========================================

const PAGES = [
  // 1-10: MENU UTAMA
  { id: 1, title: 'Dashboard', subtitle: 'Ringkasan planner Anda', icon: '📊', type: 'dashboard' },
  { id: 2, title: 'Kalender 2026', subtitle: 'Lihat jadwal dan event', icon: '📅', type: 'calendar' },
  { id: 3, title: 'To-Do Harian', subtitle: 'Kelola tugas harian', icon: '✅', type: 'todo' },
  { id: 4, title: 'Goals Tahunan', subtitle: 'Target tahun 2026', icon: '🎯', type: 'goals' },
  { id: 5, title: 'Habit Tracker', subtitle: 'Lacak kebiasaan baik', icon: '📈', type: 'habit' },
  { id: 6, title: 'Keuangan', subtitle: 'Catat pemasukan & pengeluaran', icon: '💰', type: 'finance' },
  { id: 7, title: 'Kesehatan', subtitle: 'Tracker kesehatan', icon: '🏋️', type: 'health' },
  { id: 8, title: 'Bacaan & Belajar', subtitle: 'Daftar buku & materi', icon: '📚', type: 'reading' },
  { id: 9, title: 'Jurnal Harian', subtitle: 'Tulis jurnal Anda', icon: '📓', type: 'journal' },
  { id: 10, title: 'Gratitude', subtitle: 'Syukur hari ini', icon: '🌟', type: 'gratitude' },
  
  // 11-20: PRODUKTIVITAS
  { id: 11, title: 'Brain Dump', subtitle: 'Tuangkan semua ide', icon: '🧠', type: 'braindump' },
  { id: 12, title: 'Meeting Notes', subtitle: 'Catatan rapat', icon: '📋', type: 'meeting' },
  { id: 13, title: 'Mood Board', subtitle: 'Visualisasi mood', icon: '🎨', type: 'mood' },
  { id: 14, title: 'Pengaturan', subtitle: 'Atur planner Anda', icon: '⚙️', type: 'settings' },
  { id: 15, title: 'Weekly Planner', subtitle: 'Rencana mingguan', icon: '🗓️', type: 'weekly' },
  { id: 16, title: 'Monthly Planner', subtitle: 'Rencana bulanan', icon: '📆', type: 'monthly' },
  { id: 17, title: 'Daily Focus', subtitle: 'Fokus hari ini', icon: '🎯', type: 'focus' },
  { id: 18, title: 'Time Blocking', subtitle: 'Blok waktu produktif', icon: '⏰', type: 'timeblock' },
  { id: 19, title: 'Priority Matrix', subtitle: 'Eisenhower matrix', icon: '🔲', type: 'matrix' },
  { id: 20, title: 'Pomodoro Log', subtitle: 'Log sesi fokus', icon: '🍅', type: 'pomodoro' },
  
  // 21-30: PERENCANAAN
  { id: 21, title: 'Vision Board', subtitle: 'Visi hidup Anda', icon: '🌈', type: 'vision' },
  { id: 22, title: 'Bucket List', subtitle: 'Daftar impian', icon: '🪣', type: 'bucket' },
  { id: 23, title: 'Karir & Bisnis', subtitle: 'Rencana karir', icon: '💼', type: 'career' },
  { id: 24, title: 'Travel Planner', subtitle: 'Rencana liburan', icon: '✈️', type: 'travel' },
  { id: 25, title: 'Meal Planner', subtitle: 'Menu makanan', icon: '🍽️', type: 'meal' },
  { id: 26, title: 'Belanja', subtitle: 'Daftar belanja', icon: '🛒', type: 'shopping' },
  { id: 27, title: 'Packing List', subtitle: 'Daftar bawaan', icon: '🧳', type: 'packing' },
  { id: 28, title: 'Project Tracker', subtitle: 'Lacak proyek', icon: '📁', type: 'project' },
  { id: 29, title: 'Client Manager', subtitle: 'Kelola klien', icon: '👥', type: 'client' },
  { id: 30, title: 'Invoice Tracker', subtitle: 'Lacak invoice', icon: '🧾', type: 'invoice' },
  
  // 31-40: KESEHATAN
  { id: 31, title: 'Workout Log', subtitle: 'Catatan olahraga', icon: '💪', type: 'workout' },
  { id: 32, title: 'Water Intake', subtitle: 'Konsumsi air', icon: '💧', type: 'water' },
  { id: 33, title: 'Sleep Tracker', subtitle: 'Pola tidur', icon: '😴', type: 'sleep' },
  { id: 34, title: 'Mood Tracker', subtitle: 'Lacak mood', icon: '😊', type: 'moodtrack' },
  { id: 35, title: 'Meditation', subtitle: 'Log meditasi', icon: '🧘', type: 'meditation' },
  { id: 36, title: 'Vitamins', subtitle: 'Log vitamin', icon: '💊', type: 'vitamin' },
  { id: 37, title: 'Symptom Log', subtitle: 'Catatan gejala', icon: '🩺', type: 'symptom' },
  { id: 38, title: 'Mental Health', subtitle: 'Kesehatan mental', icon: '🧠', type: 'mental' },
  { id: 39, title: 'Yoga Log', subtitle: 'Latihan yoga', icon: '🧘‍♀️', type: 'yoga' },
  { id: 40, title: 'Running Log', subtitle: 'Catatan lari', icon: '🏃', type: 'running' },
  
  // 41-50: KEUANGAN
  { id: 41, title: 'Budget Bulanan', subtitle: 'Anggaran bulanan', icon: '💵', type: 'budget' },
  { id: 42, title: 'Savings Goal', subtitle: 'Target tabungan', icon: '🏦', type: 'savings' },
  { id: 43, title: 'Investment', subtitle: 'Portofolio investasi', icon: '📈',
