import{_ as s,c as a,o,a as e}from"./chunks/framework.c7d5eb2d.js";const n=JSON.parse('{"title":"KYC & KYT Event Webhooks","description":"","frontmatter":{},"headers":[],"relativePath":"data/webhooks.md","filePath":"data/webhooks.md"}'),l={name:"data/webhooks.md"},t=[e('<h1 id="kyc-kyt-event-webhooks" tabindex="-1">KYC &amp; KYT Event Webhooks <a class="header-anchor" href="#kyc-kyt-event-webhooks" aria-label="Permalink to &quot;KYC &amp; KYT Event Webhooks&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>The Agio SDK provides a webhook system that allows you to receive notifications when a user&#39;s KYC or KYT status changes. This is useful for updating your own database with the latest data.</p><h2 id="webhook-configuration" tabindex="-1">Webhook Configuration <a class="header-anchor" href="#webhook-configuration" aria-label="Permalink to &quot;Webhook Configuration&quot;">​</a></h2><p>To configure webhooks, you must first create a webhook endpoint in your application. This endpoint will receive the webhook data from Agio. The endpoint must be accessible via HTTPS. All webhooks are sent as <code>POST</code> requests. The webhook data is sent as JSON in the request body.</p><p>Please contact the Agio team to configure your webhook endpoints after creating receiving endpoints in your application API.</p><h2 id="kyc-webhook" tabindex="-1">KYC Webhook <a class="header-anchor" href="#kyc-webhook" aria-label="Permalink to &quot;KYC Webhook&quot;">​</a></h2><p>The KYC webhook is sent when a user&#39;s KYC status changes. The webhook data contains all the information you need to update your database with the current verification data.</p><h3 id="kyc-webhook-data-fields" tabindex="-1">KYC Webhook Data Fields <a class="header-anchor" href="#kyc-webhook-data-fields" aria-label="Permalink to &quot;KYC Webhook Data Fields&quot;">​</a></h3><ul><li><code>WebhookPayloadId</code>: The ID of the webhook payload.</li><li><code>applicantActionId</code>: The ID of the applicant action.</li><li><code>applicantId</code>: The ID of the applicant.</li><li><code>applicantMemberOf</code>: The ID of the applicant&#39;s member.</li><li><code>applicantType</code>: The type of the applicant.</li><li><code>clientId</code>: The ID of the client.</li><li><code>inspectionId</code>: The ID of the inspection.</li><li><code>correlationId</code>: The ID of the request.</li><li><code>externalApplicantActionId</code>: The ID of the applicant action in your database.</li><li><code>externalUserId</code>: The ID of the user in your database.</li><li><code>inspectionId</code>: The ID of the inspection.</li><li><code>levelName</code>: The name of the KYC level.</li><li><code>reviewApproved</code>: A boolean value indicating whether the review was approved.</li><li><code>sourceKey</code>: The source key of the webhook payload.</li><li><code>sandboxMode</code>: A boolean value indicating whether the webhook payload was sent in sandbox mode.</li><li><code>type</code>: The type of the webhook payload.</li><li><code>reviewResult</code>: The review result of the applicant.</li><li><code>reviewStatus</code>: The status of the review.</li><li><code>createdAt</code>: The date and time the webhook was created.</li><li><code>videoIdentReviewStatus</code>: The status of the video ident review.</li></ul><h3 id="kyc-webhook-data-key-field-details" tabindex="-1">KYC Webhook Data Key Field Details <a class="header-anchor" href="#kyc-webhook-data-key-field-details" aria-label="Permalink to &quot;KYC Webhook Data Key Field Details&quot;">​</a></h3><h4 id="reviewstatus" tabindex="-1">reviewStatus <a class="header-anchor" href="#reviewstatus" aria-label="Permalink to &quot;reviewStatus&quot;">​</a></h4><ul><li><code>init</code>: Initial registration has started. A client is still in the process of filling out the applicant profile. Not all required documents are currently uploaded.</li><li><code>pending</code>: An applicant is ready to be processed.</li><li><code>prechecked</code>: The check is in a half way point of being finished.</li><li><code>queued</code>: The check is in a queue and will be processed soon.</li><li><code>completed</code>: The check is finished.</li><li><code>onHold</code>: Applicant pending a final decision from compliance officer (manual check was initiated) or waits for all beneficiaries to pass KYC in case of KYB verification.</li></ul><h4 id="reviewresult" tabindex="-1">reviewResult <a class="header-anchor" href="#reviewresult" aria-label="Permalink to &quot;reviewResult&quot;">​</a></h4><p>When the reviewStatus changes to <code>completed</code>, the webhook populates a “reviewResult” jsonb field that contains details related to the result.</p><p>Please note, final reviewResult approval data is summarized via the “reviewApproved” boolean field. If reviewApproved is true, then the applicant&#39;s kyc profile is in a final approval state (a value of false has multiple possible reasons, including the applicant being soft rejected, or the applicant being in a pending state).</p><h4 id="reviewresult-reviewanswer" tabindex="-1">reviewResult.reviewAnswer <a class="header-anchor" href="#reviewresult-reviewanswer" aria-label="Permalink to &quot;reviewResult.reviewAnswer&quot;">​</a></h4><ul><li><code>GREEN</code>: The applicant was approved.</li><li><code>RED</code>: The applicant was rejected.</li></ul><h4 id="reviewresult-reviewrejecttype-if-the-result-is-a-rejection-this-field-will-determine-if-the-rejection-can-be-retried" tabindex="-1">reviewResult.reviewRejectType - If the result is a rejection, this field will determine if the rejection can be retried. <a class="header-anchor" href="#reviewresult-reviewrejecttype-if-the-result-is-a-rejection-this-field-will-determine-if-the-rejection-can-be-retried" aria-label="Permalink to &quot;reviewResult.reviewRejectType - If the result is a rejection, this field will determine if the rejection can be retried.&quot;">​</a></h4><ul><li><code>FINAL</code>: The applicant was rejected.</li><li><code>RETRY</code>: The applicant was soft rejected. The applicant can retry the verification process. This may happen if the applicant&#39;s documents were not clear enough, or if the applicant&#39;s documents were not in the correct format.</li></ul><h4 id="reviewresult-rejectlabels-if-the-result-is-a-rejection-this-field-will-contain-a-list-of-labels-that-describe-the-reason-for-the-rejection" tabindex="-1">reviewResult.rejectLabels - If the result is a rejection, this field will contain a list of labels that describe the reason for the rejection. <a class="header-anchor" href="#reviewresult-rejectlabels-if-the-result-is-a-rejection-this-field-will-contain-a-list-of-labels-that-describe-the-reason-for-the-rejection" aria-label="Permalink to &quot;reviewResult.rejectLabels - If the result is a rejection, this field will contain a list of labels that describe the reason for the rejection.&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;UNSATISFACTORY_PHOTOS&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;GRAPHIC_EDITOR&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;FORGERY&quot;</span></span>\n<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;UNSATISFACTORY_PHOTOS&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;GRAPHIC_EDITOR&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;FORGERY&quot;</span></span>\n<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h4 id="example-initial-rejection" tabindex="-1">Example Initial Rejection <a class="header-anchor" href="#example-initial-rejection" aria-label="Permalink to &quot;Example Initial Rejection&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;WebhookPayloadId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;applicantId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;5cb744200a975a67ed1798a4&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// applicant ID</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;inspectionId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;5cb744200a975a67ed1798a5&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// applicant&#39;s inspection ID</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;correlationId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;req-fa94263f-0b23-42d7-9393-ab10b28ef42d&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;externalUserId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;externalUserId&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;levelName&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;basic-kyc-level&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;applicantReviewed&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;reviewResult&quot;</span><span style="color:#E1E4E8;">: {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;reviewAnswer&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;RED&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;moderationComment&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;We do not accept screenshots. Please upload an original photo.&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;clientComment&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Screenshots are not accepted.&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;reviewRejectType&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;RETRY&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;rejectLabels&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;UNSATISFACTORY_PHOTOS&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;SCREENSHOTS&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;WebhookPayloadId&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;applicantId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;5cb744200a975a67ed1798a4&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// applicant ID</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;inspectionId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;5cb744200a975a67ed1798a5&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// applicant&#39;s inspection ID</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;correlationId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;req-fa94263f-0b23-42d7-9393-ab10b28ef42d&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;externalUserId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;externalUserId&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;levelName&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;basic-kyc-level&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;applicantReviewed&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;reviewResult&quot;</span><span style="color:#24292E;">: {</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;reviewAnswer&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;RED&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;moderationComment&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;We do not accept screenshots. Please upload an original photo.&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;clientComment&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Screenshots are not accepted.&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;reviewRejectType&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;RETRY&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;rejectLabels&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;UNSATISFACTORY_PHOTOS&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;SCREENSHOTS&quot;</span><span style="color:#24292E;">]</span></span></code></pre></div><h4 id="example-final-rejection" tabindex="-1">Example Final Rejection <a class="header-anchor" href="#example-final-rejection" aria-label="Permalink to &quot;Example Final Rejection&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;WebhookPayloadId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;applicantId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;5cb744200a975a67ed1798a4&quot;</span><span style="color:#E1E4E8;">, </span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;inspectionId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;5cb744200a975a67ed1798a5&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;correlationId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;req-fa94263f-0b23-42d7-9393-ab10b28ef42d&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;externalUserId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;externalUserId&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;levelName&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;basic-kyc-level&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;applicantReviewed&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;reviewResult&quot;</span><span style="color:#E1E4E8;">: {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;moderationComment&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;We could not verify your profile. Please contact support: support@agiodigital.com&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;clientComment&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot; Suspected fraudulent account.&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;reviewAnswer&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;RED&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;rejectLabels&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;UNSATISFACTORY_PHOTOS&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;GRAPHIC_EDITOR&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;FORGERY&quot;</span><span style="color:#E1E4E8;">],</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;reviewRejectType&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;FINAL&quot;</span></span>\n<span class="line"><span style="color:#E1E4E8;">  },</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;reviewStatus&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;completed&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;createdAt&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2020-02-21 13:23:19+0000&quot;</span></span>\n<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;WebhookPayloadId&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;applicantId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;5cb744200a975a67ed1798a4&quot;</span><span style="color:#24292E;">, </span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;inspectionId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;5cb744200a975a67ed1798a5&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;correlationId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;req-fa94263f-0b23-42d7-9393-ab10b28ef42d&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;externalUserId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;externalUserId&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;levelName&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;basic-kyc-level&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;applicantReviewed&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;reviewResult&quot;</span><span style="color:#24292E;">: {</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;moderationComment&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;We could not verify your profile. Please contact support: support@agiodigital.com&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;clientComment&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot; Suspected fraudulent account.&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;reviewAnswer&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;RED&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;rejectLabels&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;UNSATISFACTORY_PHOTOS&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;GRAPHIC_EDITOR&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;FORGERY&quot;</span><span style="color:#24292E;">],</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;reviewRejectType&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;FINAL&quot;</span></span>\n<span class="line"><span style="color:#24292E;">  },</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;reviewStatus&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;completed&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;createdAt&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2020-02-21 13:23:19+0000&quot;</span></span>\n<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="example-final-approval" tabindex="-1">Example Final Approval <a class="header-anchor" href="#example-final-approval" aria-label="Permalink to &quot;Example Final Approval&quot;">​</a></h4><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;applicantId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;5cb56e8e0a975a35f333cb83&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;inspectionId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;5cb56e8e0a975a35f333cb84&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;correlationId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;req-a260b669-4f14-4bb5-a4c5-ac0218acb9a4&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;externalUserId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;externalUserId&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;levelName&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;basic-kyc-level&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;applicantReviewed&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;reviewResult&quot;</span><span style="color:#E1E4E8;">: {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;reviewAnswer&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;GREEN&quot;</span></span>\n<span class="line"><span style="color:#E1E4E8;">  },</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;reviewStatus&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;completed&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;createdAt&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2020-02-21 13:23:19+0000&quot;</span></span>\n<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;applicantId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;5cb56e8e0a975a35f333cb83&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;inspectionId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;5cb56e8e0a975a35f333cb84&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;correlationId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;req-a260b669-4f14-4bb5-a4c5-ac0218acb9a4&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;externalUserId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;externalUserId&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;levelName&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;basic-kyc-level&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;applicantReviewed&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;reviewResult&quot;</span><span style="color:#24292E;">: {</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;reviewAnswer&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;GREEN&quot;</span></span>\n<span class="line"><span style="color:#24292E;">  },</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;reviewStatus&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;completed&quot;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;createdAt&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2020-02-21 13:23:19+0000&quot;</span></span>\n<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="kyt-webhook" tabindex="-1">KYT Webhook <a class="header-anchor" href="#kyt-webhook" aria-label="Permalink to &quot;KYT Webhook&quot;">​</a></h2><p>Coming soon!</p>',30)];const p=s(l,[["render",function(s,e,n,l,p,c){return o(),a("div",null,t)}]]);export{n as __pageData,p as default};