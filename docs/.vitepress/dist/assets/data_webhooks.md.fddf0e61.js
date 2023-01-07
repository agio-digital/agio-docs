import{_ as s,o as a,c as o,a as n}from"./app.17f4fc7b.js";const e=JSON.parse('{"title":"KYC & KYT Event Webhooks","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Webhook Configuration","slug":"webhook-configuration","link":"#webhook-configuration","children":[]},{"level":2,"title":"KYC Webhook","slug":"kyc-webhook","link":"#kyc-webhook","children":[{"level":3,"title":"KYC Webhook Data Fields","slug":"kyc-webhook-data-fields","link":"#kyc-webhook-data-fields","children":[]},{"level":3,"title":"KYC Webhook Data Key Field Details","slug":"kyc-webhook-data-key-field-details","link":"#kyc-webhook-data-key-field-details","children":[]}]},{"level":2,"title":"KYT Webhook","slug":"kyt-webhook","link":"#kyt-webhook","children":[]}],"relativePath":"data/webhooks.md"}'),l={name:"data/webhooks.md"},p=[n('<h1 id="kyc-kyt-event-webhooks" tabindex="-1">KYC &amp; KYT Event Webhooks <a class="header-anchor" href="#kyc-kyt-event-webhooks" aria-hidden="true">#</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>The Agio SDK provides a webhook system that allows you to receive notifications when a user&#39;s KYC or KYT status changes. This is useful for updating your own database with the latest data.</p><h2 id="webhook-configuration" tabindex="-1">Webhook Configuration <a class="header-anchor" href="#webhook-configuration" aria-hidden="true">#</a></h2><p>To configure webhooks, you must first create a webhook endpoint in your application. This endpoint will receive the webhook data from Agio. The endpoint must be accessible via HTTPS. All webhooks are sent as <code>POST</code> requests. The webhook data is sent as JSON in the request body.</p><p>Please contact the Agio team to configure your webhook endpoints after creating receiving endpoints in your application API.</p><h2 id="kyc-webhook" tabindex="-1">KYC Webhook <a class="header-anchor" href="#kyc-webhook" aria-hidden="true">#</a></h2><p>The KYC webhook is sent when a user&#39;s KYC status changes. The webhook data contains all the information you need to update your database with the current verification data.</p><h3 id="kyc-webhook-data-fields" tabindex="-1">KYC Webhook Data Fields <a class="header-anchor" href="#kyc-webhook-data-fields" aria-hidden="true">#</a></h3><ul><li><code>WebhookPayloadId</code>: The ID of the webhook payload.</li><li><code>applicantActionId</code>: The ID of the applicant action.</li><li><code>applicantId</code>: The ID of the applicant.</li><li><code>applicantMemberOf</code>: The ID of the applicant&#39;s member.</li><li><code>applicantType</code>: The type of the applicant.</li><li><code>clientId</code>: The ID of the client.</li><li><code>inspectionId</code>: The ID of the inspection.</li><li><code>correlationId</code>: The ID of the request.</li><li><code>externalApplicantActionId</code>: The ID of the applicant action in your database.</li><li><code>externalUserId</code>: The ID of the user in your database.</li><li><code>inspectionId</code>: The ID of the inspection.</li><li><code>levelName</code>: The name of the KYC level.</li><li><code>reviewApproved</code>: A boolean value indicating whether the review was approved.</li><li><code>sourceKey</code>: The source key of the webhook payload.</li><li><code>sandboxMode</code>: A boolean value indicating whether the webhook payload was sent in sandbox mode.</li><li><code>type</code>: The type of the webhook payload.</li><li><code>reviewResult</code>: The review result of the applicant.</li><li><code>reviewStatus</code>: The status of the review.</li><li><code>createdAt</code>: The date and time the webhook was created.</li><li><code>videoIdentReviewStatus</code>: The status of the video ident review.</li></ul><h3 id="kyc-webhook-data-key-field-details" tabindex="-1">KYC Webhook Data Key Field Details <a class="header-anchor" href="#kyc-webhook-data-key-field-details" aria-hidden="true">#</a></h3><h4 id="reviewstatus" tabindex="-1">reviewStatus <a class="header-anchor" href="#reviewstatus" aria-hidden="true">#</a></h4><ul><li><code>init</code>: Initial registration has started. A client is still in the process of filling out the applicant profile. Not all required documents are currently uploaded.</li><li><code>pending</code>: An applicant is ready to be processed.</li><li><code>prechecked</code>: The check is in a half way point of being finished.</li><li><code>queued</code>: The check is in a queue and will be processed soon.</li><li><code>completed</code>: The check is finished.</li><li><code>onHold</code>: Applicant pending a final decision from compliance officer (manual check was initiated) or waits for all beneficiaries to pass KYC in case of KYB verification.</li></ul><h4 id="reviewresult" tabindex="-1">reviewResult <a class="header-anchor" href="#reviewresult" aria-hidden="true">#</a></h4><p>When the reviewStatus changes to <code>completed</code>, the webhook populates a “reviewResult” jsonb field that contains details related to the result.</p><p>Please note, final reviewResult approval data is summarized via the “reviewApproved” boolean field. If reviewApproved is true, then the applicant&#39;s kyc profile is in a final approval state (a value of false has multiple possible reasons, including the applicant being soft rejected, or the applicant being in a pending state).</p><h4 id="reviewresult-reviewanswer" tabindex="-1">reviewResult.reviewAnswer <a class="header-anchor" href="#reviewresult-reviewanswer" aria-hidden="true">#</a></h4><ul><li><code>GREEN</code>: The applicant was approved.</li><li><code>RED</code>: The applicant was rejected.</li></ul><h4 id="reviewresult-reviewrejecttype-if-the-result-is-a-rejection-this-field-will-determine-if-the-rejection-can-be-retried" tabindex="-1">reviewResult.reviewRejectType - If the result is a rejection, this field will determine if the rejection can be retried. <a class="header-anchor" href="#reviewresult-reviewrejecttype-if-the-result-is-a-rejection-this-field-will-determine-if-the-rejection-can-be-retried" aria-hidden="true">#</a></h4><ul><li><code>FINAL</code>: The applicant was rejected.</li><li><code>RETRY</code>: The applicant was soft rejected. The applicant can retry the verification process. This may happen if the applicant&#39;s documents were not clear enough, or if the applicant&#39;s documents were not in the correct format.</li></ul><h4 id="reviewresult-rejectlabels-if-the-result-is-a-rejection-this-field-will-contain-a-list-of-labels-that-describe-the-reason-for-the-rejection" tabindex="-1">reviewResult.rejectLabels - If the result is a rejection, this field will contain a list of labels that describe the reason for the rejection. <a class="header-anchor" href="#reviewresult-rejectlabels-if-the-result-is-a-rejection-this-field-will-contain-a-list-of-labels-that-describe-the-reason-for-the-rejection" aria-hidden="true">#</a></h4><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UNSATISFACTORY_PHOTOS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GRAPHIC_EDITOR</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">FORGERY</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">]</span></span>\n<span class="line"></span></code></pre></div><h4 id="example-initial-rejection" tabindex="-1">Example Initial Rejection <a class="header-anchor" href="#example-initial-rejection" aria-hidden="true">#</a></h4><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">WebhookPayloadId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">applicantId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5cb744200a975a67ed1798a4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// applicant ID</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">inspectionId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5cb744200a975a67ed1798a5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// applicant&#39;s inspection ID</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">correlationId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">req-fa94263f-0b23-42d7-9393-ab10b28ef42d</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">externalUserId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">externalUserId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">levelName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">basic-kyc-level</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">applicantReviewed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">reviewResult</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">reviewAnswer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">RED</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">moderationComment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">We do not accept screenshots. Please upload an original photo.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">clientComment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Screenshots are not accepted.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">reviewRejectType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">RETRY</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">rejectLabels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UNSATISFACTORY_PHOTOS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SCREENSHOTS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"></span></code></pre></div><h4 id="example-final-rejection" tabindex="-1">Example Final Rejection <a class="header-anchor" href="#example-final-rejection" aria-hidden="true">#</a></h4><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">WebhookPayloadId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">applicantId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5cb744200a975a67ed1798a4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">inspectionId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5cb744200a975a67ed1798a5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">correlationId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">req-fa94263f-0b23-42d7-9393-ab10b28ef42d</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">externalUserId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">externalUserId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">levelName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">basic-kyc-level</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">applicantReviewed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">reviewResult</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">moderationComment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">We could not verify your profile. Please contact support: support@agiodigital.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">clientComment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> Suspected fraudulent account.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">reviewAnswer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">RED</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">rejectLabels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UNSATISFACTORY_PHOTOS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GRAPHIC_EDITOR</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">FORGERY</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">reviewRejectType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">FINAL</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">reviewStatus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">completed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">createdAt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2020-02-21 13:23:19+0000</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h4 id="example-final-approval" tabindex="-1">Example Final Approval <a class="header-anchor" href="#example-final-approval" aria-hidden="true">#</a></h4><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">applicantId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5cb56e8e0a975a35f333cb83</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">inspectionId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5cb56e8e0a975a35f333cb84</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">correlationId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">req-a260b669-4f14-4bb5-a4c5-ac0218acb9a4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">externalUserId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">externalUserId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">levelName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">basic-kyc-level</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">applicantReviewed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">reviewResult</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">reviewAnswer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GREEN</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">reviewStatus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">completed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">createdAt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2020-02-21 13:23:19+0000</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="kyt-webhook" tabindex="-1">KYT Webhook <a class="header-anchor" href="#kyt-webhook" aria-hidden="true">#</a></h2><p>Coming soon!</p>',30)];const t=s(l,[["render",function(s,n,e,l,t,c){return a(),o("div",null,p)}]]);export{e as __pageData,t as default};
