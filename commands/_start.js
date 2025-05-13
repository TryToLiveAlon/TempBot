/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

const webApp = WebApp.getUrl({ command: "webApp" });

Api.sendMessage({
  text: "📝 *Welcome to BB Notes!*\n\n✅ This is your personal space to jot down ideas, reminders, and to-do lists.\n\n📅 *Create and edit notes seamlessly,* and access them anytime.\n\n🔒 _Your notes are stored locally, ensuring privacy and quick access._",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: [
    [
      { text: "📱 Start writing now! ✍️", web_app: { url: webApp } },
    ]
  ]}
});
