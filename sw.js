self.addEventListener('push', function (event) {
  const data = event.data ? event.data.text() : '你好';
  event.waitUntil(
    self.registration.showNotification('小问候', {
      body: data
    })
  );
});
