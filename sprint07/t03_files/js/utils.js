const hasSession = (req) => (req.session.showAd ? true : false);

const addSession = (req, session) => (req.session.showAd = session);

const sessionEnd = (req) => req.session.destroy();

const getSessionValue = (session) => session.showAd;

export { hasSession, addSession, sessionEnd, getSessionValue };
