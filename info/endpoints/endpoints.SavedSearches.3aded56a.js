"use strict";
(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.SavedSearches"],
  {
    41517: (e, s, t) => {
      t.r(s), t.d(s, { default: () => a });
      const a = ({ apiClient: e, featureSwitches: s }) => ({
        fetch: (s = {}, t = {}) => e.get("saved_searches/list", s, t),
        create: (s, t = {}) => e.post("saved_searches/create", s, {}, t),
        destroy: (s, t = {}) =>
          e.post(`saved_searches/destroy/${s.id}`, s, {}, t),
      });
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.SavedSearches.3aded56a.js.map
