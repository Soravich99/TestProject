// Copyright (c) 2009-2017 SAP SE, All Rights Reserved
sap.ui.define(["sap/ushell/utils/_HttpClient/internals","sap/ushell/utils/_HttpClient/factory"],function(i,f){"use strict";return f.bind(null,i.getHttpRequestWrapper,i.executeRequestWithCsrfToken.bind(null,i.executeRequest,i.csrfTokenWriteToCache,i.csrfTokenGet,i.csrfTokenFetch,i.csrfTokenAddToRequestHeader,i.csrfTokenExtractFromResponseHeader,i.isSafeHttpMethod));},true);
