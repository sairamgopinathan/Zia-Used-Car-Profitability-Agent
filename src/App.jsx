import React, { useEffect } from 'react';

const ziaConfig = {
  orgId: '60072127247',
  entityId: '7583000000014061',
  customWelcomeMessage:
    'Hi. I can help evaluate a used car for Honda Cars India. Share the model, year, city, odometer, ownership, and seller asking price.',
  openChatOnInit: true
};

export default function App() {
  useEffect(() => {
    const expandChat = () => {
      const selectors = [
        'agents-chat-bot-comp',
        '.agents-chat-widget',
        '.agents-chatbot-container',
        '.zagents-chat-widget',
        '.zia-agent-chatbot',
        '.chat-widget',
        'iframe'
      ];

      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          el.style.position = 'fixed';
          el.style.inset = '0';
          el.style.width = '100vw';
          el.style.height = '100vh';
          el.style.maxWidth = '100vw';
          el.style.maxHeight = '100vh';
          el.style.minWidth = '100vw';
          el.style.minHeight = '100vh';
          el.style.border = '0';
          el.style.borderRadius = '0';
          el.style.boxShadow = 'none';
          el.style.zIndex = '999999';
        });
      });
    };

    expandChat();
    const interval = window.setInterval(expandChat, 600);
    const observer = new MutationObserver(expandChat);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="chat-only-shell">
      <agents-chat-bot-comp ziaAgents={JSON.stringify(ziaConfig)} />
    </main>
  );
}
