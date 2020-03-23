/*!
 * Copyright 2017 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *      http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */


(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports.AmazonCognitoIdentity = factory();
  else root.AmazonCognitoIdentity = factory();
}(this, () =>
/** *** */ (function (modules) { // webpackBootstrap
    /** *** */ 	// The module cache
    /** *** */ 	const installedModules = {};

    /** *** */ 	// The require function
    /** *** */ 	function __webpack_require__(moduleId) {
      /** *** */ 		// Check if module is in cache
      /** *** */ 		if (installedModules[moduleId])
      /** *** */ 			{ return installedModules[moduleId].exports; }

      /** *** */ 		// Create a new module (and put it into the cache)
      /** *** */ 		const module = installedModules[moduleId] = {
        /** *** */ 			exports: {},
        /** *** */ 			id: moduleId,
        /** *** */ 			loaded: false,
        /** *** */ 		};

      /** *** */ 		// Execute the module function
      /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

      /** *** */ 		// Flag the module as loaded
      /** *** */ 		module.loaded = true;

      /** *** */ 		// Return the exports of the module
      /** *** */ 		return module.exports;
      /** *** */ 	}


    /** *** */ 	// expose the modules object (__webpack_modules__)
    /** *** */ 	__webpack_require__.m = modules;

    /** *** */ 	// expose the module cache
    /** *** */ 	__webpack_require__.c = installedModules;

    /** *** */ 	// __webpack_public_path__
    /** *** */ 	__webpack_require__.p = '';

    /** *** */ 	// Load entry module and return exports
    /** *** */ 	return __webpack_require__(0);
    /** *** */ }([
    /* 0 */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
	  value: true,
      });

      const _src = __webpack_require__(12);

      Object.keys(_src).forEach((key) => {
	  if (key === 'default' || key === '__esModule') return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _src[key];
	    },
	  });
      });

      const enhancements = _interopRequireWildcard(_src);

      function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; }

      // The version of crypto-browserify included by aws-sdk only
      // checks for window.crypto, not window.msCrypto as used by
      // IE 11 – so we set it explicitly here
      /*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */

      if (typeof window !== 'undefined' && !window.crypto && window.msCrypto) {
	  window.crypto = window.msCrypto;
      }
      /***/ }),
    /* 1 */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
	  value: true,
      });

      const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }()); /*!
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Amazon Cognito Auth SDK for JavaScript
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License").
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * A copy of the License is located at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *         http://aws.amazon.com/apache2.0/
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * or in the "license" file accompanying this file.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OR CONDITIONS OF ANY KIND, either express or implied. See the
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * License for the specific language governing permissions
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * and limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

      const _DecodingHelper = __webpack_require__(6);

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      /** @class */
      const CognitoAccessToken = (function () {
	  /**
	   * Constructs a new CognitoAccessToken object
	   * @param {string=} AccessToken The JWT access token.
	   */
	  function CognitoAccessToken(AccessToken) {
	    _classCallCheck(this, CognitoAccessToken);

	    // Assign object
	    this.jwtToken = AccessToken || '';
	    this.payload = this.decodePayload();
	  }

	  /**
	   * @returns {string} the record's token.
	   */


	  _createClass(CognitoAccessToken, [{
	    key: 'getJwtToken',
	    value: function getJwtToken() {
	      return this.jwtToken;
	    },

	    /**
	     * Sets new value for access token.
	     * @param {string=} accessToken The JWT access token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setJwtToken',
	    value: function setJwtToken(accessToken) {
	      this.jwtToken = accessToken;
	    },

	    /**
	     * @returns {int} the token's expiration (exp member).
	     */

	  }, {
	    key: 'getExpiration',
	    value: function getExpiration() {
	      if (this.jwtToken === null) {
	        return undefined;
	      }
	      const jwtPayload = this.jwtToken.split('.')[1];
	      return JSON.parse((0, _DecodingHelper.decode)(jwtPayload)).exp;
	    },

	    /**
	     * @returns {string} the username from payload.
	     */

	  }, {
	    key: 'getUsername',
	    value: function getUsername() {
	      if (this.jwtToken === null) {
	        return undefined;
	      }
	      const jwtPayload = this.jwtToken.split('.')[1];
	      return JSON.parse((0, _DecodingHelper.decode)(jwtPayload)).username;
	    },

	    /**
	     * @returns {object} the token's payload.
	     */

	  }, {
	    key: 'decodePayload',
	    value: function decodePayload() {
	      const jwtPayload = this.jwtToken.split('.')[1];
	      try {
	        return JSON.parse((0, _DecodingHelper.decode)(jwtPayload));
	      } catch (err) {
	        return {};
	      }
	    },
	  }]);

	  return CognitoAccessToken;
      }());

      exports.default = CognitoAccessToken;
      /***/ }),
    /* 2 */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
	  value: true,
      });

      const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }()); /*!
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Amazon Cognito Auth SDK for JavaScript
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License").
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * A copy of the License is located at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *         http://aws.amazon.com/apache2.0/
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * or in the "license" file accompanying this file.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OR CONDITIONS OF ANY KIND, either express or implied. See the
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * License for the specific language governing permissions
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * and limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

      const _DecodingHelper = __webpack_require__(6);

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      /** @class */
      const CognitoIdToken = (function () {
	  /**
	   * Constructs a new CognitoIdToken object
	   * @param {string=} IdToken The JWT Id token
	   */
	  function CognitoIdToken(IdToken) {
	    _classCallCheck(this, CognitoIdToken);

	    // Assign object
	    this.jwtToken = IdToken || '';
	    this.payload = this.decodePayload();
	  }

	  /**
	   * @returns {string} the record's token.
	   */


	  _createClass(CognitoIdToken, [{
	    key: 'getJwtToken',
	    value: function getJwtToken() {
	      return this.jwtToken;
	    },

	    /**
	     * Sets new value for id token.
	     * @param {string=} idToken The JWT Id token
	     * @returns {void}
	     */

	  }, {
	    key: 'setJwtToken',
	    value: function setJwtToken(idToken) {
	      this.jwtToken = idToken;
	    },

	    /**
	     * @returns {int} the token's expiration (exp member).
	     */

	  }, {
	    key: 'getExpiration',
	    value: function getExpiration() {
	      if (this.jwtToken === null) {
	        return undefined;
	      }
	      const jwtPayload = this.jwtToken.split('.')[1];
	      return JSON.parse((0, _DecodingHelper.decode)(jwtPayload)).exp;
	    },

	    /**
	     * @returns {object} the token's payload.
	     */

	  }, {
	    key: 'decodePayload',
	    value: function decodePayload() {
	      const jwtPayload = this.jwtToken.split('.')[1];
	      try {
	        return JSON.parse((0, _DecodingHelper.decode)(jwtPayload));
	      } catch (err) {
	        return {};
	      }
	    },
	  }]);

	  return CognitoIdToken;
      }());

      exports.default = CognitoIdToken;
      /***/ }),
    /* 3 */
    /***/ (function (module, exports) {
      Object.defineProperty(exports, '__esModule', {
	  value: true,
      });

      const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      /*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */

      /** @class */
      const CognitoRefreshToken = (function () {
	  /**
	   * Constructs a new CognitoRefreshToken object
	   * @param {string=} RefreshToken The JWT refresh token.
	   */
	  function CognitoRefreshToken(RefreshToken) {
	    _classCallCheck(this, CognitoRefreshToken);

	    // Assign object
	    this.refreshToken = RefreshToken || '';
	  }

	  /**
	   * @returns {string} the record's token.
	   */


	  _createClass(CognitoRefreshToken, [{
	    key: 'getToken',
	    value: function getToken() {
	      return this.refreshToken;
	    },

	    /**
	     * Sets new value for refresh token.
	     * @param {string=} refreshToken The JWT refresh token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setToken',
	    value: function setToken(refreshToken) {
	      this.refreshToken = refreshToken;
	    },
	  }]);

	  return CognitoRefreshToken;
      }());

      exports.default = CognitoRefreshToken;
      /***/ }),
    /* 4 */
    /***/ (function (module, exports) {
      Object.defineProperty(exports, '__esModule', {
	  value: true,
      });

      const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      /*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */

      /** @class */
      const CognitoTokenScopes = (function () {
	  /**
	   * Constructs a new CognitoTokenScopes object
	   * @param {array=} TokenScopesArray The token scopes
	   */
	  function CognitoTokenScopes(TokenScopesArray) {
	    _classCallCheck(this, CognitoTokenScopes);

	    // Assign object
	    this.tokenScopes = TokenScopesArray || [];
	  }

	  /**
	   * @returns {Array} the token scopes.
	   */


	  _createClass(CognitoTokenScopes, [{
	    key: 'getScopes',
	    value: function getScopes() {
	      return this.tokenScopes;
	    },

	    /**
	     * Sets new value for token scopes.
	     * @param {array=} tokenScopes The token scopes
	     * @returns {void}
	     */

	  }, {
	    key: 'setTokenScopes',
	    value: function setTokenScopes(tokenScopes) {
	      this.tokenScopes = tokenScopes;
	    },
	  }]);

	  return CognitoTokenScopes;
      }());

      exports.default = CognitoTokenScopes;
      /***/ }),
    /* 5 */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
	  value: true,
      });

      const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }()); /*!
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Amazon Cognito Auth SDK for JavaScript
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License").
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * A copy of the License is located at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *         http://aws.amazon.com/apache2.0/
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * or in the "license" file accompanying this file.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OR CONDITIONS OF ANY KIND, either express or implied. See the
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * License for the specific language governing permissions
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * and limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

      const _CognitoTokenScopes = __webpack_require__(4);

      const _CognitoTokenScopes2 = _interopRequireDefault(_CognitoTokenScopes);

      const _CognitoAccessToken = __webpack_require__(1);

      const _CognitoAccessToken2 = _interopRequireDefault(_CognitoAccessToken);

      const _CognitoIdToken = __webpack_require__(2);

      const _CognitoIdToken2 = _interopRequireDefault(_CognitoIdToken);

      const _CognitoRefreshToken = __webpack_require__(3);

      const _CognitoRefreshToken2 = _interopRequireDefault(_CognitoRefreshToken);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      /** @class */
      const CognitoAuthSession = (function () {
	  /**
	   * Constructs a new CognitoUserSession object
	   * @param {CognitoIdToken} IdToken The session's Id token.
	   * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
	   * @param {CognitoAccessToken} AccessToken The session's access token.
	   * @param {array}  TokenScopes  The session's token scopes.
	    * @param {string} State The session's state.
	   */
	  function CognitoAuthSession() {
	    const _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        const { IdToken } = _ref;
	        const { RefreshToken } = _ref;
	        const { AccessToken } = _ref;
	        const { TokenScopes } = _ref;
	        const { State } = _ref;

	    _classCallCheck(this, CognitoAuthSession);

	    if (IdToken) {
	      this.idToken = IdToken;
	    } else {
	      this.idToken = new _CognitoIdToken2.default();
	    }
	    if (RefreshToken) {
	      this.refreshToken = RefreshToken;
	    } else {
	      this.refreshToken = new _CognitoRefreshToken2.default();
	    }
	    if (AccessToken) {
	      this.accessToken = AccessToken;
	    } else {
	      this.accessToken = new _CognitoAccessToken2.default();
	    }
	    if (TokenScopes) {
	      this.tokenScopes = TokenScopes;
	    } else {
	      this.tokenScopes = new _CognitoTokenScopes2.default();
	    }
	    if (State) {
	      this.state = State;
	    } else {
	      this.state = null;
	    }
	  }

	  /**
	   * @returns {CognitoIdToken} the session's Id token
	   */


	  _createClass(CognitoAuthSession, [{
	    key: 'getIdToken',
	    value: function getIdToken() {
	      return this.idToken;
	    },

	    /**
	     * Set a new Id token
	     * @param {CognitoIdToken} IdToken The session's Id token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setIdToken',
	    value: function setIdToken(IdToken) {
	      this.idToken = IdToken;
	    },

	    /**
	     * @returns {CognitoRefreshToken} the session's refresh token
	     */

	  }, {
	    key: 'getRefreshToken',
	    value: function getRefreshToken() {
	      return this.refreshToken;
	    },

	    /**
	     * Set a new Refresh token
	     * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setRefreshToken',
	    value: function setRefreshToken(RefreshToken) {
	      this.refreshToken = RefreshToken;
	    },

	    /**
	     * @returns {CognitoAccessToken} the session's access token
	     */

	  }, {
	    key: 'getAccessToken',
	    value: function getAccessToken() {
	      return this.accessToken;
	    },

	    /**
	     * Set a new Access token
	     * @param {CognitoAccessToken} AccessToken The session's access token.
	     * @returns {void}
	     */

	  }, {
	    key: 'setAccessToken',
	    value: function setAccessToken(AccessToken) {
	      this.accessToken = AccessToken;
	    },

	    /**
	     * @returns {CognitoTokenScopes} the session's token scopes
	     */

	  }, {
	    key: 'getTokenScopes',
	    value: function getTokenScopes() {
	      return this.tokenScopes;
	    },

	    /**
	     * Set new token scopes
	     * @param {array}  tokenScopes  The session's token scopes.
	     * @returns {void}
	     */

	  }, {
	    key: 'setTokenScopes',
	    value: function setTokenScopes(tokenScopes) {
	      this.tokenScopes = tokenScopes;
	    },

	    /**
	     * @returns {string} the session's state
	     */

	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.state;
	    },

	    /**
	     * Set new state
	     * @param {string}  state  The session's state.
	     * @returns {void}
	     */

	  }, {
	    key: 'setState',
	    value: function setState(State) {
	      this.state = State;
	    },

	    /**
	     * Checks to see if the session is still valid based on session expiry information found
	     * in Access and Id Tokens and the current time
	     * @returns {boolean} if the session is still valid
	     */

	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      const now = Math.floor(new Date() / 1000);
	      try {
	        if (this.accessToken != null) {
	          return now < this.accessToken.getExpiration();
	        }
	        if (this.idToken != null) {
	          return now < this.idToken.getExpiration();
	        }
	        return false;
	      } catch (e) {
	        return false;
	      }
	    },
	  }]);

	  return CognitoAuthSession;
      }());

      exports.default = CognitoAuthSession;
      /***/ }),
    /* 6 */
    /***/ (function (module, exports) {
      /* WEBPACK VAR INJECTION */(function (global) {
        Object.defineProperty(exports, '__esModule', {
	  value: true,
        });
        const decode = exports.decode = function decode(str) {
	  return global.atob(str);
        };
        /* WEBPACK VAR INJECTION */ }.call(exports, (function () { return this; }())));
      /***/ }),
    /* 7 */
    /***/ (function (module, exports) {
      Object.defineProperty(exports, '__esModule', {
	  value: true,
      });

      const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      /*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */
      let dataMemory = {};

      /** @class */

      const MemoryStorage = (function () {
	  function MemoryStorage() {
	    _classCallCheck(this, MemoryStorage);
	  }

	  _createClass(MemoryStorage, null, [{
	    key: 'setItem',


	    /**
	     * This is used to set a specific item in storage
	     * @param {string} key - the key for the item
	     * @param {object} value - the value
	     * @returns {string} value that was set
	     */
	    value: function setItem(key, value) {
	      dataMemory[key] = value;
	      return dataMemory[key];
	    },

	    /**
	     * This is used to get a specific key from storage
	     * @param {string} key - the key for the item
	     * This is used to clear the storage
	     * @returns {string} the data item
	     */

	  }, {
	    key: 'getItem',
	    value: function getItem(key) {
	      return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
	    },

	    /**
	     * This is used to remove an item from storage
	     * @param {string} key - the key being set
	     * @returns {string} value - value that was deleted
	     */

	  }, {
	    key: 'removeItem',
	    value: function removeItem(key) {
	      return delete dataMemory[key];
	    },

	    /**
	     * This is used to clear the storage
	     * @returns {string} nothing
	     */

	  }, {
	    key: 'clear',
	    value: function clear() {
	      dataMemory = {};
	      return dataMemory;
	    },
	  }]);

	  return MemoryStorage;
      }());

      /** @class */


      const StorageHelper = (function () {
	  /**
	   * This is used to get a storage object
	   * @returns {object} the storage
	   */
	  function StorageHelper() {
	    _classCallCheck(this, StorageHelper);

	    try {
	      this.storageWindow = window.localStorage;
	      this.storageWindow.setItem('aws.cognito.test-ls', 1);
	      this.storageWindow.removeItem('aws.cognito.test-ls');
	    } catch (exception) {
	      this.storageWindow = MemoryStorage;
	    }
	  }

	  /**
	   * This is used to return the storage
	   * @returns {object} the storage
	   */


	  _createClass(StorageHelper, [{
	    key: 'getStorage',
	    value: function getStorage() {
	      return this.storageWindow;
	    },
	  }]);

	  return StorageHelper;
      }());

      exports.default = StorageHelper;
      /***/ }),
    /* 8 */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
	  value: true,
      });

      const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

      const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }()); /*!
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Amazon Cognito Auth SDK for JavaScript
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * Licensed under the Apache License, Version 2.0 (the "License").
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * You may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * A copy of the License is located at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *         http://aws.amazon.com/apache2.0/
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * or in the "license" file accompanying this file.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * OR CONDITIONS OF ANY KIND, either express or implied. See the
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * License for the specific language governing permissions
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * and limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */

      const _CognitoTokenScopes = __webpack_require__(4);

      const _CognitoTokenScopes2 = _interopRequireDefault(_CognitoTokenScopes);

      const _CognitoAccessToken = __webpack_require__(1);

      const _CognitoAccessToken2 = _interopRequireDefault(_CognitoAccessToken);

      const _CognitoIdToken = __webpack_require__(2);

      const _CognitoIdToken2 = _interopRequireDefault(_CognitoIdToken);

      const _CognitoRefreshToken = __webpack_require__(3);

      const _CognitoRefreshToken2 = _interopRequireDefault(_CognitoRefreshToken);

      const _CognitoAuthSession = __webpack_require__(5);

      const _CognitoAuthSession2 = _interopRequireDefault(_CognitoAuthSession);

      const _StorageHelper = __webpack_require__(7);

      const _StorageHelper2 = _interopRequireDefault(_StorageHelper);

      const _UriHelper = __webpack_require__(11);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      /** @class */
      const CognitoAuth = (function () {
	  /**
	   * Constructs a new CognitoAuth object
	   * @param {object} data Creation options
	   * @param {string} data.ClientId Required: User pool application client id.
	   * @param {string} data.AppWebDomain Required: The application/user-pools Cognito web hostname,
	   *                     this is set at the Cognito console.
	   * @param {array} data.TokenScopesArray Optional: The token scopes
	   * @param {string} data.RedirectUriSignIn Required: The redirect Uri,
	   * which will be launched after authentication as signed in.
	   * @param {string} data.RedirectUriSignOut Required:
	   * The redirect Uri, which will be launched when signed out.
	   * @param {string} data.IdentityProvider Optional: Pre-selected identity provider (this allows to
	   * automatically trigger social provider authentication flow).
	   * @param {string} data.UserPoolId Optional: UserPoolId for the configured cognito userPool.
	   * @param {boolean} data.AdvancedSecurityDataCollectionFlag Optional: boolean flag indicating if the
	   *        data collection is enabled to support cognito advanced security features. By default, this
	   *        flag is set to true.
	   * @param {object} data.Storage Optional: e.g. new CookieStorage(), to use the specified storage provided
	   * @param {function} data.LaunchUri Optional: Function to open a url, by default uses window.open in browser, Linking.openUrl in React Native
	   * @param {nodeCallback<CognitoAuthSession>} Optional: userhandler Called on success or error.
	   */
	  function CognitoAuth(data) {
	    _classCallCheck(this, CognitoAuth);

	    const _ref = data || {};
	        const { ClientId } = _ref;
	        const { AppWebDomain } = _ref;
	        const { TokenScopesArray } = _ref;
	        const { RedirectUriSignIn } = _ref;
	        const { RedirectUriSignOut } = _ref;
	        const { IdentityProvider } = _ref;
	        const { UserPoolId } = _ref;
	        const { AdvancedSecurityDataCollectionFlag } = _ref;
	        const { Storage } = _ref;
	        const { LaunchUri } = _ref;

	    if (data == null || !ClientId || !AppWebDomain || !RedirectUriSignIn || !RedirectUriSignOut) {
	      throw new Error(this.getCognitoConstants().PARAMETERERROR);
	    }

	    this.clientId = ClientId;
	    this.appWebDomain = AppWebDomain;
	    this.TokenScopesArray = TokenScopesArray || [];
	    if (!Array.isArray(TokenScopesArray)) {
	      throw new Error(this.getCognitoConstants().SCOPETYPEERROR);
	    }
	    const tokenScopes = new _CognitoTokenScopes2.default(this.TokenScopesArray);
	    this.RedirectUriSignIn = RedirectUriSignIn;
	    this.RedirectUriSignOut = RedirectUriSignOut;
	    this.IdentityProvider = IdentityProvider;
	    this.responseType = this.getCognitoConstants().TOKEN;
	    this.storage = Storage || new _StorageHelper2.default().getStorage();
	    this.username = this.getLastUser();
	    this.userPoolId = UserPoolId;
	    this.signInUserSession = this.getCachedSession();
	    this.signInUserSession.setTokenScopes(tokenScopes);
	    this.launchUri = typeof LaunchUri === 'function' ? LaunchUri : _UriHelper.launchUri;

	    /**
	     * By default, AdvancedSecurityDataCollectionFlag is set to true, if no input value is provided.
	     */
	    this.advancedSecurityDataCollectionFlag = true;
	    if (AdvancedSecurityDataCollectionFlag) {
	      this.advancedSecurityDataCollectionFlag = AdvancedSecurityDataCollectionFlag;
	    }
	  }

	  /**
	   * @returns {JSON} the constants
	   */


	  _createClass(CognitoAuth, [{
	    key: 'getCognitoConstants',
	    value: function getCognitoConstants() {
	      const CognitoConstants = {
	        DOMAIN_SCHEME: 'https',
	        DOMAIN_PATH_SIGNIN: 'oauth2/authorize',
	        DOMAIN_PATH_TOKEN: 'oauth2/token',
	        DOMAIN_PATH_SIGNOUT: 'logout',
	        DOMAIN_QUERY_PARAM_REDIRECT_URI: 'redirect_uri',
	        DOMAIN_QUERY_PARAM_SIGNOUT_URI: 'logout_uri',
	        DOMAIN_QUERY_PARAM_RESPONSE_TYPE: 'response_type',
	        DOMAIN_QUERY_PARAM_IDENTITY_PROVIDER: 'identity_provider',
	        DOMAIN_QUERY_PARAM_USERCONTEXTDATA: 'userContextData',
	        CLIENT_ID: 'client_id',
	        STATE: 'state',
	        SCOPE: 'scope',
	        TOKEN: 'token',
	        CODE: 'code',
	        POST: 'POST',
	        PARAMETERERROR: 'The parameters: App client Id, App web domain' + ', the redirect URL when you are signed in and the ' + 'redirect URL when you are signed out are required.',
	        SCOPETYPEERROR: 'Scopes have to be array type. ',
	        QUESTIONMARK: '?',
	        POUNDSIGN: '#',
	        COLONDOUBLESLASH: '://',
	        SLASH: '/',
	        AMPERSAND: '&',
	        EQUALSIGN: '=',
	        SPACE: ' ',
	        CONTENTTYPE: 'Content-Type',
	        CONTENTTYPEVALUE: 'application/x-www-form-urlencoded',
	        AUTHORIZATIONCODE: 'authorization_code',
	        IDTOKEN: 'id_token',
	        ACCESSTOKEN: 'access_token',
	        REFRESHTOKEN: 'refresh_token',
	        ERROR: 'error',
	        ERROR_DESCRIPTION: 'error_description',
	        STRINGTYPE: 'string',
	        STATELENGTH: 32,
	        STATEORIGINSTRING: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	        WITHCREDENTIALS: 'withCredentials',
	        UNDEFINED: 'undefined',
	        HOSTNAMEREGEX: /:\/\/([0-9]?\.)?(.[^/:]+)/i,
	        QUERYPARAMETERREGEX1: /#(.+)/,
	        QUERYPARAMETERREGEX2: /=(.+)/,
	        HEADER: { 'Content-Type': 'application/x-www-form-urlencoded' },
	      };
	      return CognitoConstants;
	    },

	    /**
	     * @returns {string} the client id
	     */

	  }, {
	    key: 'getClientId',
	    value: function getClientId() {
	      return this.clientId;
	    },

	    /**
	     * @returns {string} the app web domain
	     */

	  }, {
	    key: 'getAppWebDomain',
	    value: function getAppWebDomain() {
	      return this.appWebDomain;
	    },

	    /**
	     * method for getting the current user of the application from the local storage
	     *
	     * @returns {CognitoAuth} the user retrieved from storage
	     */

	  }, {
	    key: 'getCurrentUser',
	    value: function getCurrentUser() {
	      const lastUserKey = `CognitoIdentityServiceProvider.${this.clientId}.LastAuthUser`;

	      const lastAuthUser = localStorage.getItem(lastUserKey);
	      return lastAuthUser;
	    },

	    /**
	     * @param {string} Username the user's name
	     * method for setting the current user's name
	     * @returns {void}
	     */

	  }, {
	    key: 'setUser',
	    value: function setUser(Username) {
	      this.username = Username;
	    },

	    /**
	     * sets response type to 'code'
	     * @returns {void}
	     */

	  }, {
	    key: 'useCodeGrantFlow',
	    value: function useCodeGrantFlow() {
	      this.responseType = this.getCognitoConstants().CODE;
	    },

	    /**
	     * sets response type to 'token'
	     * @returns {void}
	     */

	  }, {
	    key: 'useImplicitFlow',
	    value: function useImplicitFlow() {
	      this.responseType = this.getCognitoConstants().TOKEN;
	    },

	    /**
	     * @returns {CognitoAuthSession} the current session for this user
	     */

	  }, {
	    key: 'getSignInUserSession',
	    value: function getSignInUserSession() {
	      return this.signInUserSession;
	    },

	    /**
	     * @returns {string} the user's username
	     */

	  }, {
	    key: 'getUsername',
	    value: function getUsername() {
	      return this.username;
	    },

	    /**
	     * @param {string} Username the user's username
	     * @returns {void}
	     */

	  }, {
	    key: 'setUsername',
	    value: function setUsername(Username) {
	      this.username = Username;
	    },

	    /**
	     * @returns {string} the user's state
	     */

	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.state;
	    },

	    /**
	     * @param {string} State the user's state
	     * @returns {void}
	     */

	  }, {
	    key: 'setState',
	    value: function setState(State) {
	      this.state = State;
	    },

	    /**
	     * This is used to get a session, either from the session object
	     * or from the local storage, or by using a refresh token
	     * @param {string} RedirectUriSignIn Required: The redirect Uri,
	     * which will be launched after authentication.
	     * @param {array} TokenScopesArray Required: The token scopes, it is an
	     * array of strings specifying all scopes for the tokens.
	     * @returns {void}
	     */

	  }, {
	    key: 'getSession',
	    value: function getSession() {
	      const tokenScopesInputSet = new Set(this.TokenScopesArray);
	      const cachedScopesSet = new Set(this.signInUserSession.tokenScopes.getScopes());
	      const URL = this.getFQDNSignIn();
	      if (this.signInUserSession != null && this.signInUserSession.isValid()) {
	        return this.userhandler.onSuccess(this.signInUserSession);
	      }
	      this.signInUserSession = this.getCachedSession();
	      // compare scopes
	      if (!this.compareSets(tokenScopesInputSet, cachedScopesSet)) {
	        const tokenScopes = new _CognitoTokenScopes2.default(this.TokenScopesArray);
	        const idToken = new _CognitoIdToken2.default();
	        const accessToken = new _CognitoAccessToken2.default();
	        const refreshToken = new _CognitoRefreshToken2.default();
	        this.signInUserSession.setTokenScopes(tokenScopes);
	        this.signInUserSession.setIdToken(idToken);
	        this.signInUserSession.setAccessToken(accessToken);
	        this.signInUserSession.setRefreshToken(refreshToken);
	        this.launchUri(URL);
	      } else if (this.signInUserSession.isValid()) {
	        return this.userhandler.onSuccess(this.signInUserSession);
	      } else if (!this.signInUserSession.getRefreshToken() || !this.signInUserSession.getRefreshToken().getToken()) {
	        this.launchUri(URL);
	      } else {
	        this.refreshSession(this.signInUserSession.getRefreshToken().getToken());
	      }
	      return undefined;
	    },

	    /**
	     * @param {string} httpRequestResponse the http request response
	     * @returns {void}
	     * Parse the http request response and proceed according to different response types.
	     */

	  }, {
	    key: 'parseCognitoWebResponse',
	    value: function parseCognitoWebResponse(httpRequestResponse) {
	      let map = void 0;
	      if (httpRequestResponse.indexOf(this.getCognitoConstants().QUESTIONMARK) > -1) {
	        // for code type
	        // this is to avoid a bug exists when sign in with Google or facebook
	        // Sometimes the code will contain a poundsign in the end which breaks the parsing
	        const response = httpRequestResponse.split(this.getCognitoConstants().POUNDSIGN)[0];
	        map = this.getQueryParameters(response, this.getCognitoConstants().QUESTIONMARK);
	        if (map.has(this.getCognitoConstants().ERROR)) {
	          return this.userhandler.onFailure(map.get(this.getCognitoConstants().ERROR_DESCRIPTION));
	        }
	        this.getCodeQueryParameter(map);
	      } else if (httpRequestResponse.indexOf(this.getCognitoConstants().POUNDSIGN) > -1) {
	        // for token type
	        map = this.getQueryParameters(httpRequestResponse, this.getCognitoConstants().QUERYPARAMETERREGEX1);
	        if (map.has(this.getCognitoConstants().ERROR)) {
	          return this.userhandler.onFailure(map.get(this.getCognitoConstants().ERROR_DESCRIPTION));
	        }
	        // To use the map to get tokens
	        this.getTokenQueryParameter(map);
	      }
	    },

	    /**
	     * @param {map} Query parameter map
	     * @returns {void}
	     * Get the query parameter map and proceed according to code response type.
	     */

	  }, {
	    key: 'getCodeQueryParameter',
	    value: function getCodeQueryParameter(map) {
	      const state = null;
	      if (map.has(this.getCognitoConstants().STATE)) {
	        this.signInUserSession.setState(map.get(this.getCognitoConstants().STATE));
	      } else {
	        this.signInUserSession.setState(state);
	      }

	      if (map.has(this.getCognitoConstants().CODE)) {
	        // if the response contains code
	        // To parse the response and get the code value.
	        const codeParameter = map.get(this.getCognitoConstants().CODE);
	        const url = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_TOKEN);
	        const header = this.getCognitoConstants().HEADER;
	        const body = {
                grant_type: this.getCognitoConstants().AUTHORIZATIONCODE,
	          client_id: this.getClientId(),
	          redirect_uri: this.RedirectUriSignIn,
	          code: codeParameter,
              };
	        const boundOnSuccess = this.onSuccessExchangeForToken.bind(this);
	        const boundOnFailure = this.onFailure.bind(this);
	        this.makePOSTRequest(header, body, url, boundOnSuccess, boundOnFailure);
	      }
	    },

	    /**
	     * Get the query parameter map and proceed according to token response type.
	     * @param {map} Query parameter map
	     * @returns {void}
	     */

	  }, {
	    key: 'getTokenQueryParameter',
	    value: function getTokenQueryParameter(map) {
	      const idToken = new _CognitoIdToken2.default();
	      const accessToken = new _CognitoAccessToken2.default();
	      const refreshToken = new _CognitoRefreshToken2.default();
	      const state = null;
	      if (map.has(this.getCognitoConstants().IDTOKEN)) {
	        idToken.setJwtToken(map.get(this.getCognitoConstants().IDTOKEN));
	        this.signInUserSession.setIdToken(idToken);
	      } else {
	        this.signInUserSession.setIdToken(idToken);
	      }
	      if (map.has(this.getCognitoConstants().ACCESSTOKEN)) {
	        accessToken.setJwtToken(map.get(this.getCognitoConstants().ACCESSTOKEN));
	        this.signInUserSession.setAccessToken(accessToken);
	      } else {
	        this.signInUserSession.setAccessToken(accessToken);
	      }
	      if (map.has(this.getCognitoConstants().STATE)) {
	        this.signInUserSession.setState(map.get(this.getCognitoConstants().STATE));
	      } else {
	        this.signInUserSession.setState(state);
	      }
	      this.cacheTokensScopes();
	      this.userhandler.onSuccess(this.signInUserSession);
	    },

	    /**
	     * Get cached tokens and scopes and return a new session using all the cached data.
	     * @returns {CognitoAuthSession} the auth session
	     */

	  }, {
	    key: 'getCachedSession',
	    value: function getCachedSession() {
	      if (!this.username) {
	        return new _CognitoAuthSession2.default();
	      }
	      const keyPrefix = `CognitoIdentityServiceProvider.${this.getClientId()}.${this.username}`;
	      const idTokenKey = `${keyPrefix}.idToken`;
	      const accessTokenKey = `${keyPrefix}.accessToken`;
	      const refreshTokenKey = `${keyPrefix}.refreshToken`;
	      const scopeKey = `${keyPrefix}.tokenScopesString`;

	      const scopesString = localStorage.getItem(scopeKey);
	      let scopesArray = [];
	      if (scopesString) {
	        scopesArray = scopesString.split(' ');
	      }
	      const tokenScopes = new _CognitoTokenScopes2.default(scopesArray);
	      const idToken = new _CognitoIdToken2.default(localStorage.getItem(idTokenKey));
	      const accessToken = new _CognitoAccessToken2.default(localStorage.getItem(accessTokenKey));
	      const refreshToken = new _CognitoRefreshToken2.default(localStorage.getItem(refreshTokenKey));

	      const sessionData = {
	        IdToken: idToken,
	        AccessToken: accessToken,
	        RefreshToken: refreshToken,
	        TokenScopes: tokenScopes,
	      };
	      const cachedSession = new _CognitoAuthSession2.default(sessionData);
	      return cachedSession;
	    },

	    /**
	     * This is used to get last signed in user from local storage
	     * @returns {string} the last user name
	     */

	  }, {
	    key: 'getLastUser',
	    value: function getLastUser() {
	      const keyPrefix = `CognitoIdentityServiceProvider.${this.getClientId()}`;
	      const lastUserKey = `${keyPrefix}.LastAuthUser`;
	      const lastUserName = localStorage.getItem(lastUserKey);
	      if (lastUserName) {
	        return lastUserName;
	      }
	      return undefined;
	    },

	    /**
	     * This is used to save the session tokens and scopes to local storage
	     * Input parameter is a set of strings.
	     * @returns {void}
	     */

	  }, {
	    key: 'cacheTokensScopes',
	    value: function cacheTokensScopes() {
	      const keyPrefix = `CognitoIdentityServiceProvider.${this.getClientId()}`;
	      const tokenUserName = this.signInUserSession.getAccessToken().getUsername();
	      this.username = tokenUserName;
	      const idTokenKey = `${keyPrefix}.${tokenUserName}.idToken`;
	      const accessTokenKey = `${keyPrefix}.${tokenUserName}.accessToken`;
	      const refreshTokenKey = `${keyPrefix}.${tokenUserName}.refreshToken`;
	      const lastUserKey = `${keyPrefix}.LastAuthUser`;
	      const scopeKey = `${keyPrefix}.${tokenUserName}.tokenScopesString`;
	      const scopesArray = this.signInUserSession.getTokenScopes().getScopes();
	      const scopesString = scopesArray.join(' ');
	      this.storage.setItem(idTokenKey, this.signInUserSession.getIdToken().getJwtToken());
	      this.storage.setItem(accessTokenKey, this.signInUserSession.getAccessToken().getJwtToken());
	      this.storage.setItem(refreshTokenKey, this.signInUserSession.getRefreshToken().getToken());
	      this.storage.setItem(lastUserKey, tokenUserName);
	      this.storage.setItem(scopeKey, scopesString);
	    },

	    /**
	     * Compare two sets if they are identical.
	     * @param {set} set1 one set
	     * @param {set} set2 the other set
	     * @returns {boolean} boolean value is true if two sets are identical
	     */

	  }, {
	    key: 'compareSets',
	    value: function compareSets(set1, set2) {
	      if (set1.size !== set2.size) {
	        return false;
	      }
	      let _iteratorNormalCompletion = true;
	      let _didIteratorError = false;
	      let _iteratorError;

	      try {
	        for (var _iterator = set1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          const item = _step.value;

	          if (!set2.has(item)) {
	            return false;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      return true;
	    },

	    /**
	     * @param {string} url the url string
	     * Get the hostname from url.
	     * @returns {string} hostname string
	     */

	  }, {
	    key: 'getHostName',
	    value: function getHostName(url) {
	      const match = url.match(this.getCognitoConstants().HOSTNAMEREGEX);
	      if (match != null && match.length > 2 && _typeof(match[2]) === this.getCognitoConstants().STRINGTYPE && match[2].length > 0) {
	        return match[2];
	      }
	      return undefined;
	    },

	    /**
	     * Get http query parameters and return them as a map.
	     * @param {string} url the url string
	     * @param {string} splitMark query parameters split mark (prefix)
	     * @returns {map} map
	     */

	  }, {
	    key: 'getQueryParameters',
	    value: function getQueryParameters(url, splitMark) {
	      const str = String(url).split(splitMark);
	      const url2 = str[1];
	      const str1 = String(url2).split(this.getCognitoConstants().AMPERSAND);
	      const num = str1.length;
	      const map = new Map();
	      let i = void 0;
	      for (i = 0; i < num; i++) {
	        str1[i] = String(str1[i]).split(this.getCognitoConstants().QUERYPARAMETERREGEX2);
	        map.set(str1[i][0], str1[i][1]);
	      }
	      return map;
	    },

	    /**
	     * helper function to generate a random string
	     * @param {int} length the length of string
	     * @param {string} chars a original string
	     * @returns {string} a random value.
	     */

	  }, {
	    key: 'generateRandomString',
	    value: function generateRandomString(length, chars) {
	      let result = '';
	      let i = length;
	      for (; i > 0; --i) {
	        result += chars[Math.round(Math.random() * (chars.length - 1))];
	      } return result;
	    },

	    /**
	     * This is used to clear the session tokens and scopes from local storage
	     * @returns {void}
	     */

	  }, {
	    key: 'clearCachedTokensScopes',
	    value: function clearCachedTokensScopes() {
	      const keyPrefix = `CognitoIdentityServiceProvider.${this.getClientId()}`;
	      const idTokenKey = `${keyPrefix}.${this.username}.idToken`;
	      const accessTokenKey = `${keyPrefix}.${this.username}.accessToken`;
	      const refreshTokenKey = `${keyPrefix}.${this.username}.refreshToken`;
	      const lastUserKey = `${keyPrefix}.LastAuthUser`;
	      const scopeKey = `${keyPrefix}.${this.username}.tokenScopesString`;

	      this.storage.removeItem(idTokenKey);
	      this.storage.removeItem(accessTokenKey);
	      this.storage.removeItem(refreshTokenKey);
	      this.storage.removeItem(lastUserKey);
	      this.storage.removeItem(scopeKey);
	    },

	    /**
	     * This is used to build a user session from tokens retrieved in the authentication result
	     * @param {object} refreshToken authResult Successful auth response from server.
	     * @returns {void}
	     */

	  }, {
	    key: 'refreshSession',
	    value: function refreshSession(refreshToken) {
	      // https POST call for refreshing token
	      const url = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_TOKEN);
	      const header = this.getCognitoConstants().HEADER;
	      const body = {
              grant_type: this.getCognitoConstants().REFRESHTOKEN,
	        client_id: this.getClientId(),
	        redirect_uri: this.RedirectUriSignIn,
	        refresh_token: refreshToken,
            };
	      const boundOnSuccess = this.onSuccessRefreshToken.bind(this);
	      const boundOnFailure = this.onFailure.bind(this);
	      this.makePOSTRequest(header, body, url, boundOnSuccess, boundOnFailure);
	    },

	    /**
	     * Make the http POST request.
	     * @param {JSON} header header JSON object
	     * @param {JSON} body body JSON object
	     * @param {string} url string
	     * @param {function} onSuccess callback
	     * @param {function} onFailure callback
	     * @returns {void}
	     */

	  }, {
	    key: 'makePOSTRequest',
	    value: function makePOSTRequest(header, body, url, onSuccess, onFailure) {
	      // This is a sample server that supports CORS.
	      const xhr = this.createCORSRequest(this.getCognitoConstants().POST, url);
	      let bodyString = '';
	      if (!xhr) {
	        return;
	      }
	      // set header
	      for (const key in header) {
	        xhr.setRequestHeader(key, header[key]);
	      }
	      for (const _key in body) {
	        bodyString = bodyString.concat(_key, this.getCognitoConstants().EQUALSIGN, body[_key], this.getCognitoConstants().AMPERSAND);
	      }
	      bodyString = bodyString.substring(0, bodyString.length - 1);
	      xhr.send(bodyString);
	      xhr.onreadystatechange = function addressState() {
	        if (xhr.readyState === 4) {
	          if (xhr.status === 200) {
	            onSuccess(xhr.responseText);
	          } else {
	            onFailure(xhr.responseText);
	          }
	        }
	      };
	    },

	    /**
	     * Create the XHR object
	     * @param {string} method which method to call
	     * @param {string} url the url string
	     * @returns {object} xhr
	     */

	  }, {
	    key: 'createCORSRequest',
	    value: function createCORSRequest(method, url) {
	      let xhr = new XMLHttpRequest();
	      if (this.getCognitoConstants().WITHCREDENTIALS in xhr) {
	        // XHR for Chrome/Firefox/Opera/Safari.
	        xhr.open(method, url, true);
	      } else if ((typeof XDomainRequest === 'undefined' ? 'undefined' : _typeof(XDomainRequest)) !== this.getCognitoConstants().UNDEFINED) {
	        // XDomainRequest for IE.
	        xhr = new XDomainRequest();
	        xhr.open(method, url);
	      } else {
	        // CORS not supported.
	        xhr = null;
	      }
	      return xhr;
	    },

	    /**
	     * The http POST request onFailure callback.
	     * @param {object} err the error object
	     * @returns {function} onFailure
	     */

	  }, {
	    key: 'onFailure',
	    value: function onFailure(err) {
	      this.userhandler.onFailure(err);
	    },

	    /**
	     * The http POST request onSuccess callback when refreshing tokens.
	     * @param {JSON} jsonData tokens
	     */

	  }, {
	    key: 'onSuccessRefreshToken',
	    value: function onSuccessRefreshToken(jsonData) {
	      const jsonDataObject = JSON.parse(jsonData);
	      if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ERROR)) {
	        const URL = this.getFQDNSignIn();
	        this.launchUri(URL);
	      } else {
	        if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().IDTOKEN)) {
	          this.signInUserSession.setIdToken(new _CognitoIdToken2.default(jsonDataObject.id_token));
	        }
	        if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ACCESSTOKEN)) {
	          this.signInUserSession.setAccessToken(new _CognitoAccessToken2.default(jsonDataObject.access_token));
	        }
	        this.cacheTokensScopes();
	        this.userhandler.onSuccess(this.signInUserSession);
	      }
	    },

	    /**
	     * The http POST request onSuccess callback when exchanging code for tokens.
	     * @param {JSON} jsonData tokens
	     */

	  }, {
	    key: 'onSuccessExchangeForToken',
	    value: function onSuccessExchangeForToken(jsonData) {
	      const jsonDataObject = JSON.parse(jsonData);
	      const refreshToken = new _CognitoRefreshToken2.default();
	      const accessToken = new _CognitoAccessToken2.default();
	      const idToken = new _CognitoIdToken2.default();
	      const state = null;
	      if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ERROR)) {
	        return this.userhandler.onFailure(jsonData);
	      }
	      if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().IDTOKEN)) {
	        this.signInUserSession.setIdToken(new _CognitoIdToken2.default(jsonDataObject.id_token));
	      } else {
	        this.signInUserSession.setIdToken(idToken);
	      }
	      if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ACCESSTOKEN)) {
	        this.signInUserSession.setAccessToken(new _CognitoAccessToken2.default(jsonDataObject.access_token));
	      } else {
	        this.signInUserSession.setAccessToken(accessToken);
	      }
	      if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().REFRESHTOKEN)) {
	        this.signInUserSession.setRefreshToken(new _CognitoRefreshToken2.default(jsonDataObject.refresh_token));
	      } else {
	        this.signInUserSession.setRefreshToken(refreshToken);
	      }
	      this.cacheTokensScopes();
	      this.userhandler.onSuccess(this.signInUserSession);
	    },

	    /**
	     * Launch Cognito Auth UI page.
	     * @param {string} URL the url to launch
	     * @returns {void}
	     */

	  }, {
	    key: 'launchUri',
	    value: function launchUri() {},
	  }, {
	    key: 'getSpaceSeperatedScopeString',
	    // overwritten in constructor

	    /**
	     * @returns {string} scopes string
	     */
	    value: function getSpaceSeperatedScopeString() {
	      let tokenScopesString = this.signInUserSession.getTokenScopes().getScopes();
	      tokenScopesString = tokenScopesString.join(this.getCognitoConstants().SPACE);
	      return encodeURIComponent(tokenScopesString);
	    },

	    /**
	     * Create the FQDN(fully qualified domain name) for authorization endpoint.
	     * @returns {string} url
	     */

	  }, {
	    key: 'getFQDNSignIn',
	    value: function getFQDNSignIn() {
	      if (this.state == null) {
	        this.state = this.generateRandomString(this.getCognitoConstants().STATELENGTH, this.getCognitoConstants().STATEORIGINSTRING);
	      }

	      const identityProviderParam = this.IdentityProvider ? this.getCognitoConstants().AMPERSAND.concat(this.getCognitoConstants().DOMAIN_QUERY_PARAM_IDENTITY_PROVIDER, this.getCognitoConstants().EQUALSIGN, this.IdentityProvider) : '';
	      const tokenScopesString = this.getSpaceSeperatedScopeString();

	      let userContextDataParam = '';
	      const userContextData = this.getUserContextData();
	      if (userContextData) {
	        userContextDataParam = this.getCognitoConstants().AMPERSAND + this.getCognitoConstants().DOMAIN_QUERY_PARAM_USERCONTEXTDATA + this.getCognitoConstants().EQUALSIGN + this.getUserContextData();
	      }

	      // Build the complete web domain to launch the login screen
	      const uri = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_SIGNIN, this.getCognitoConstants().QUESTIONMARK, this.getCognitoConstants().DOMAIN_QUERY_PARAM_REDIRECT_URI, this.getCognitoConstants().EQUALSIGN, encodeURIComponent(this.RedirectUriSignIn), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().DOMAIN_QUERY_PARAM_RESPONSE_TYPE, this.getCognitoConstants().EQUALSIGN, this.responseType, this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().CLIENT_ID, this.getCognitoConstants().EQUALSIGN, this.getClientId(), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().STATE, this.getCognitoConstants().EQUALSIGN, this.state, this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().SCOPE, this.getCognitoConstants().EQUALSIGN, tokenScopesString, identityProviderParam, userContextDataParam);

	      return uri;
	    },

	    /**
	     * Sign out the user.
	     * @returns {void}
	     */

	  }, {
	    key: 'signOut',
	    value: function signOut() {
	      const URL = this.getFQDNSignOut();
	      this.signInUserSession = null;
	      this.clearCachedTokensScopes();
	      this.launchUri(URL);
	    },

	    /**
	     * Create the FQDN(fully qualified domain name) for signout endpoint.
	     * @returns {string} url
	     */

	  }, {
	    key: 'getFQDNSignOut',
	    value: function getFQDNSignOut() {
	      const uri = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_SIGNOUT, this.getCognitoConstants().QUESTIONMARK, this.getCognitoConstants().DOMAIN_QUERY_PARAM_SIGNOUT_URI, this.getCognitoConstants().EQUALSIGN, encodeURIComponent(this.RedirectUriSignOut), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().CLIENT_ID, this.getCognitoConstants().EQUALSIGN, this.getClientId());
	      return uri;
	    },

	    /**
	     * This method returns the encoded data string used for cognito advanced security feature.
	     * This would be generated only when developer has included the JS used for collecting the
	     * data on their client. Please refer to documentation to know more about using AdvancedSecurity
	     * features
	     * */

	  }, {
	    key: 'getUserContextData',
	    value: function getUserContextData() {
	      if (typeof AmazonCognitoAdvancedSecurityData === 'undefined') {
	        return;
	      }

	      let _username = '';
	      if (this.username) {
	        _username = this.username;
	      }

	      let _userpoolId = '';
	      if (this.userpoolId) {
	        _userpoolId = this.userpoolId;
	      }

	      if (this.advancedSecurityDataCollectionFlag) {
	        return AmazonCognitoAdvancedSecurityData.getData(_username, _userpoolId, this.clientId);
	      }
	    },

	    /**
	     * Helper method to let the user know if he has either a valid cached session
	     * or a valid authenticated session from the app integration callback.
	     * @returns {boolean} userSignedIn
	     */

	  }, {
	    key: 'isUserSignedIn',
	    value: function isUserSignedIn() {
	      return this.signInUserSession != null && this.signInUserSession.isValid() || this.getCachedSession() != null && this.getCachedSession().isValid();
	    },
	  }]);

	  return CognitoAuth;
      }());

      exports.default = CognitoAuth;
      /***/ }),
    /* 9 */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
	  value: true,
      });

      const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

      const _jsCookie = __webpack_require__(13);

      const Cookies = _interopRequireWildcard(_jsCookie);

      function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      /** @class */
      const CookieStorage = (function () {
	  /**
	   * Constructs a new CookieStorage object
	   * @param {object} data Creation options.
	   * @param {string} data.domain Cookies domain (mandatory).
	   * @param {string} data.path Cookies path (default: '/')
	   * @param {integer} data.expires Cookie expiration (in days, default: 365)
	   * @param {boolean} data.secure Cookie secure flag (default: true)
	   */
	  function CookieStorage(data) {
	    _classCallCheck(this, CookieStorage);

	    this.domain = data.domain;
	    if (data.path) {
	      this.path = data.path;
	    } else {
	      this.path = '/';
	    }
	    if (Object.prototype.hasOwnProperty.call(data, 'expires')) {
	      this.expires = data.expires;
	    } else {
	      this.expires = 365;
	    }
	    if (Object.prototype.hasOwnProperty.call(data, 'secure')) {
	      this.secure = data.secure;
	    } else {
	      this.secure = true;
	    }
	  }

	  /**
	   * This is used to set a specific item in storage
	   * @param {string} key - the key for the item
	   * @param {object} value - the value
	   * @returns {string} value that was set
	   */


	  _createClass(CookieStorage, [{
	    key: 'setItem',
	    value: function setItem(key, value) {
	      Cookies.set(key, value, {
	        path: this.path,
	        expires: this.expires,
	        domain: this.domain,
	        secure: this.secure,
	      });
	      return Cookies.get(key);
	    },

	    /**
	     * This is used to get a specific key from storage
	     * @param {string} key - the key for the item
	     * This is used to clear the storage
	     * @returns {string} the data item
	     */

	  }, {
	    key: 'getItem',
	    value: function getItem(key) {
	      return Cookies.get(key);
	    },

	    /**
	     * This is used to remove an item from storage
	     * @param {string} key - the key being set
	     * @returns {string} value - value that was deleted
	     */

	  }, {
	    key: 'removeItem',
	    value: function removeItem(key) {
	      return Cookies.remove(key, {
	        path: this.path,
	        domain: this.domain,
	        secure: this.secure,
	      });
	    },

	    /**
	     * This is used to clear the storage
	     * @returns {string} nothing
	     */

	  }, {
	    key: 'clear',
	    value: function clear() {
	      const cookies = Cookies.get();
	      let index = void 0;
	      for (index = 0; index < cookies.length; ++index) {
	        Cookies.remove(cookies[index]);
	      }
	      return {};
	    },
	  }]);

	  return CookieStorage;
      }());

      exports.default = CookieStorage;
      /***/ }),
    /* 10 */
    /***/ (function (module, exports) {
      Object.defineProperty(exports, '__esModule', {
	  value: true,
      });

      const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      /*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      /** @class */

      const DateHelper = (function () {
	  function DateHelper() {
	    _classCallCheck(this, DateHelper);
	  }

	  _createClass(DateHelper, [{
	    key: 'getNowString',

	    /**
	     * @returns {string} The current time in "ddd MMM D HH:mm:ss UTC YYYY" format.
	     */
	    value: function getNowString() {
	      const now = new Date();

	      const weekDay = weekNames[now.getUTCDay()];
	      const month = monthNames[now.getUTCMonth()];
	      const day = now.getUTCDate();

	      let hours = now.getUTCHours();
	      if (hours < 10) {
	        hours = `0${hours}`;
	      }

	      let minutes = now.getUTCMinutes();
	      if (minutes < 10) {
	        minutes = `0${minutes}`;
	      }

	      let seconds = now.getUTCSeconds();
	      if (seconds < 10) {
	        seconds = `0${seconds}`;
	      }

	      const year = now.getUTCFullYear();

	      // ddd MMM D HH:mm:ss UTC YYYY
	      const dateNow = `${weekDay} ${month} ${day} ${hours}:${minutes}:${seconds} UTC ${year}`;

	      return dateNow;
	    },
	  }]);

	  return DateHelper;
      }());

      exports.default = DateHelper;
      /***/ }),
    /* 11 */
    /***/ (function (module, exports) {
      Object.defineProperty(exports, '__esModule', {
	  value: true,
      });
      const SELF = '_self';

      const launchUri = exports.launchUri = function launchUri(url) {
	  return window.open(url, SELF);
      };
      /***/ }),
    /* 12 */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
	  value: true,
      });

      const _CognitoAccessToken = __webpack_require__(1);

      Object.defineProperty(exports, 'CognitoAccessToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAccessToken).default;
	  },
      });

      const _CognitoIdToken = __webpack_require__(2);

      Object.defineProperty(exports, 'CognitoIdToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoIdToken).default;
	  },
      });

      const _CognitoRefreshToken = __webpack_require__(3);

      Object.defineProperty(exports, 'CognitoRefreshToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoRefreshToken).default;
	  },
      });

      const _CognitoTokenScopes = __webpack_require__(4);

      Object.defineProperty(exports, 'CognitoTokenScopes', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoTokenScopes).default;
	  },
      });

      const _CognitoAuth = __webpack_require__(8);

      Object.defineProperty(exports, 'CognitoAuth', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAuth).default;
	  },
      });

      const _CognitoAuthSession = __webpack_require__(5);

      Object.defineProperty(exports, 'CognitoAuthSession', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAuthSession).default;
	  },
      });

      const _DateHelper = __webpack_require__(10);

      Object.defineProperty(exports, 'DateHelper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DateHelper).default;
	  },
      });

      const _StorageHelper = __webpack_require__(7);

      Object.defineProperty(exports, 'StorageHelper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StorageHelper).default;
	  },
      });

      const _CookieStorage = __webpack_require__(9);

      Object.defineProperty(exports, 'CookieStorage', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CookieStorage).default;
	  },
      });

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
      /***/ }),
    /* 13 */
    /***/ (function (module, exports, __webpack_require__) {
      let __WEBPACK_AMD_DEFINE_FACTORY__; let
        __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.2.0
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
      (function (factory) {
        let registeredInModuleLoader = false;
        if (true) {
          !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          registeredInModuleLoader = true;
        }
        if (true) {
          module.exports = factory();
          registeredInModuleLoader = true;
        }
        if (!registeredInModuleLoader) {
          const OldCookies = window.Cookies;
          const api = window.Cookies = factory();
          api.noConflict = function () {
            window.Cookies = OldCookies;
            return api;
          };
        }
      }(() => {
        function extend() {
          let i = 0;
          const result = {};
          for (; i < arguments.length; i++) {
            const attributes = arguments[i];
            for (const key in attributes) {
              result[key] = attributes[key];
            }
          }
          return result;
        }

        function init(converter) {
          function api(key, value, attributes) {
            let result;
            if (typeof document === 'undefined') {
              return;
            }

            // Write

            if (arguments.length > 1) {
              attributes = extend({
                path: '/',
              }, api.defaults, attributes);

              if (typeof attributes.expires === 'number') {
                const expires = new Date();
                expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                attributes.expires = expires;
              }

              // We're using "expires" because "max-age" is not supported by IE
              attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

              try {
                result = JSON.stringify(value);
                if (/^[\{\[]/.test(result)) {
                  value = result;
                }
              } catch (e) {}

              if (!converter.write) {
                value = encodeURIComponent(String(value))
                  .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
              } else {
                value = converter.write(value, key);
              }

              key = encodeURIComponent(String(key));
              key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
              key = key.replace(/[\(\)]/g, escape);

              let stringifiedAttributes = '';

              for (const attributeName in attributes) {
                if (!attributes[attributeName]) {
                  continue;
                }
                stringifiedAttributes += `; ${attributeName}`;
                if (attributes[attributeName] === true) {
                  continue;
                }
                stringifiedAttributes += `=${attributes[attributeName]}`;
              }
              return (document.cookie = `${key}=${value}${stringifiedAttributes}`);
            }

            // Read

            if (!key) {
              result = {};
            }

            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling "get()"
            const cookies = document.cookie ? document.cookie.split('; ') : [];
            const rdecode = /(%[0-9A-Z]{2})+/g;
            let i = 0;

            for (; i < cookies.length; i++) {
              const parts = cookies[i].split('=');
              let cookie = parts.slice(1).join('=');

              if (!this.json && cookie.charAt(0) === '"') {
                cookie = cookie.slice(1, -1);
              }

              try {
                const name = parts[0].replace(rdecode, decodeURIComponent);
                cookie = converter.read
                  ? converter.read(cookie, name) : converter(cookie, name)
							|| cookie.replace(rdecode, decodeURIComponent);

                if (this.json) {
                  try {
                    cookie = JSON.parse(cookie);
                  } catch (e) {}
                }

                if (key === name) {
                  result = cookie;
                  break;
                }

                if (!key) {
                  result[name] = cookie;
                }
              } catch (e) {}
            }

            return result;
          }

          api.set = api;
          api.get = function (key) {
            return api.call(api, key);
          };
          api.getJSON = function () {
            return api.apply({
              json: true,
            }, [].slice.call(arguments));
          };
          api.defaults = {};

          api.remove = function (key, attributes) {
            api(key, '', extend(attributes, {
              expires: -1,
            }));
          };

          api.withConverter = init;

          return api;
        }

        return init(() => {});
      }));
      /***/ }),
    /** *** */ ]))));
