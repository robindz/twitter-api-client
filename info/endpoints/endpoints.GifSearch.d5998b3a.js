"use strict";
(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.GifSearch"],
  {
    95264: (e, t, s) => {
      s.r(t), s.d(t, { default: () => r });
      const r = ({ apiClient: e, featureSwitches: t }) => ({
        categories: (t, s) => e.get("foundmedia/categories", t, s),
        category(t, s) {
          const { category: r, ...a } = t;
          return e.get(`foundmedia/categories/${r}`, a, s);
        },
        search: (t, s) => e.get("foundmedia/search", t, s),
      });
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.GifSearch.d5998b3a.js.map
