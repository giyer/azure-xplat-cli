// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '38b598fc-e57a-423f-b2e7-dc0ddb631f1f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup2125?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xDeploymentTestGroup2125' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-request-id': '2bfcbd64-8807-4a5b-8e7d-ad690595beb7',
  'x-ms-correlation-request-id': '2bfcbd64-8807-4a5b-8e7d-ad690595beb7',
  'x-ms-routing-request-id': 'CENTRALUS:20160217T194838Z:2bfcbd64-8807-4a5b-8e7d-ad690595beb7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 19:48:37 GMT',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup2125?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125\",\"name\":\"xDeploymentTestGroup2125\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'a2ce2738-cf82-401a-80e7-03542ad0eef7',
  'x-ms-correlation-request-id': 'a2ce2738-cf82-401a-80e7-03542ad0eef7',
  'x-ms-routing-request-id': 'CENTRALUS:20160217T194839Z:a2ce2738-cf82-401a-80e7-03542ad0eef7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 19:48:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup2125/providers/Microsoft.Resources/deployments/Deploy18755/validate?api-version=2015-11-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Resources/deployments/Deploy18755\",\"name\":\"Deploy18755\",\"properties\":{\"templateLink\":{\"uri\":\"http://azuresdkcitest.blob.core.windows.net/azure-cli-test/arm-deployment-template.json\",\"contentVersion\":\"1.0.0.0\"},\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite16772\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost22452\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Standard\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2016-02-17T19:48:41.5433703Z\",\"duration\":\"PT0S\",\"correlationId\":\"88f3ee0b-982c-4131-a478-d842e6d52c0e\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost22452\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite16772\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/Sites/xDeploymentTestSite16772\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite16772\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite16772/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost22452\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost22452-xDeploymentTestGroup2125\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost22452-xDeploymentTestGroup2125\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite16772\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite16772\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite16772\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite16772\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite16772\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite16772\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost22452\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost22452\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost22452\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost22452\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost22452\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost22452\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite16772\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/components/xDeploymentTestSite16772\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite16772\"}],\"validatedResources\":[{\"apiVersion\":\"2015-02-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\",\"name\":\"xDeploymentTestHost22452\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"properties\":{\"name\":\"xDeploymentTestHost22452\",\"sku\":\"Standard\",\"workerSize\":\"0\",\"numberOfWorkers\":1}},{\"apiVersion\":\"2015-02-01\",\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\"],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\",\"name\":\"xDeploymentTestSite16772\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":{\"hidden-related:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\":\"Resource\"},\"properties\":{\"name\":\"xDeploymentTestSite16772\",\"serverFarmId\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\"}},{\"apiVersion\":\"2015-02-01\",\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/Sites/xDeploymentTestSite16772\"],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772/Extensions/MSDeploy\",\"name\":\"xDeploymentTestSite16772/MSDeploy\",\"type\":\"Microsoft.Web/sites/Extensions\",\"properties\":{\"packageUri\":\"https://auxmktplceprod.blob.core.windows.net/packages/StarterSite-modified.zip\",\"dbType\":\"None\",\"connectionString\":\"\",\"setParameters\":{\"Application Path\":\"xDeploymentTestSite16772\"}}},{\"apiVersion\":\"2014-04-01\",\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\"],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost22452-xDeploymentTestGroup2125\",\"name\":\"xDeploymentTestHost22452-xDeploymentTestGroup2125\",\"type\":\"microsoft.insights/autoscalesettings\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\":\"Resource\"},\"properties\":{\"profiles\":[{\"name\":\"Default\",\"capacity\":{\"minimum\":\"1\",\"maximum\":\"2\",\"default\":\"1\"},\"rules\":[{\"metricTrigger\":{\"metricName\":\"CpuPercentage\",\"metricResourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\",\"timeGrain\":\"PT1M\",\"statistic\":\"Average\",\"timeWindow\":\"PT10M\",\"timeAggregation\":\"Average\",\"operator\":\"GreaterThan\",\"threshold\":80.0},\"scaleAction\":{\"direction\":\"Increase\",\"type\":\"ChangeCount\",\"value\":\"1\",\"cooldown\":\"PT10M\"}},{\"metricTrigger\":{\"metricName\":\"CpuPercentage\",\"metricResourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\",\"timeGrain\":\"PT1M\",\"statistic\":\"Average\",\"timeWindow\":\"PT1H\",\"timeAggregation\":\"Average\",\"operator\":\"LessThan\",\"threshold\":60.0},\"scaleAction\":{\"direction\":\"Decrease\",\"type\":\"ChangeCount\",\"value\":\"1\",\"cooldown\":\"PT1H\"}}]}],\"enabled\":false,\"name\":\"xDeploymentTestHost22452-xDeploymentTestGroup2125\",\"targetResourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\"}},{\"apiVersion\":\"2014-04-01\",\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\"],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite16772\",\"name\":\"ServerErrors xDeploymentTestSite16772\",\"type\":\"microsoft.insights/alertrules\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\":\"Resource\"},\"properties\":{\"name\":\"ServerErrors xDeploymentTestSite16772\",\"description\":\"xDeploymentTestSite16772 has some server errors, status code 5xx.\",\"isEnabled\":false,\"condition\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\",\"metricName\":\"Http5xx\"},\"operator\":\"GreaterThan\",\"threshold\":0.0,\"windowSize\":\"PT5M\"},\"action\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\"sendToServiceOwners\":true,\"customEmails\":[]}}},{\"apiVersion\":\"2014-04-01\",\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\"],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite16772\",\"name\":\"ForbiddenRequests xDeploymentTestSite16772\",\"type\":\"microsoft.insights/alertrules\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\":\"Resource\"},\"properties\":{\"name\":\"ForbiddenRequests xDeploymentTestSite16772\",\"description\":\"xDeploymentTestSite16772 has some requests that are forbidden, status code 403.\",\"isEnabled\":false,\"condition\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\",\"metricName\":\"Http403\"},\"operator\":\"GreaterThan\",\"threshold\":0,\"windowSize\":\"PT5M\"},\"action\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\"sendToServiceOwners\":true,\"customEmails\":[]}}},{\"apiVersion\":\"2014-04-01\",\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\"],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost22452\",\"name\":\"CPUHigh xDeploymentTestHost22452\",\"type\":\"microsoft.insights/alertrules\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\":\"Resource\"},\"properties\":{\"name\":\"CPUHigh xDeploymentTestHost22452\",\"description\":\"The average CPU is high across all the instances of xDeploymentTestHost22452\",\"isEnabled\":false,\"condition\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\",\"metricName\":\"CpuPercentage\"},\"operator\":\"GreaterThan\",\"threshold\":90,\"windowSize\":\"PT15M\"},\"action\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\"sendToServiceOwners\":true,\"customEmails\":[]}}},{\"apiVersion\":\"2014-04-01\",\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\"],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost22452\",\"name\":\"LongHttpQueue xDeploymentTestHost22452\",\"type\":\"microsoft.insights/alertrules\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\":\"Resource\"},\"properties\":{\"name\":\"LongHttpQueue xDeploymentTestHost22452\",\"description\":\"The HTTP queue for the instances of xDeploymentTestHost22452 has a large number of pending requests.\",\"isEnabled\":false,\"condition\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\",\"metricName\":\"HttpQueueLength\"},\"operator\":\"GreaterThan\",\"threshold\":100.0,\"windowSize\":\"PT5M\"},\"action\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\"sendToServiceOwners\":true,\"customEmails\":[]}}},{\"apiVersion\":\"2014-04-01\",\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\"],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/components/xDeploymentTestSite16772\",\"name\":\"xDeploymentTestSite16772\",\"type\":\"microsoft.insights/components\",\"location\":\"Central US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\":\"Resource\"},\"properties\":{\"applicationId\":\"xDeploymentTestSite16772\"}}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '88f3ee0b-982c-4131-a478-d842e6d52c0e',
  'x-ms-correlation-request-id': '88f3ee0b-982c-4131-a478-d842e6d52c0e',
  'x-ms-routing-request-id': 'CENTRALUS:20160217T194842Z:88f3ee0b-982c-4131-a478-d842e6d52c0e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 19:48:41 GMT',
  'content-length': '15889' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup2125/providers/Microsoft.Resources/deployments/Deploy18755?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Resources/deployments/Deploy18755\",\"name\":\"Deploy18755\",\"properties\":{\"templateLink\":{\"uri\":\"http://azuresdkcitest.blob.core.windows.net/azure-cli-test/arm-deployment-template.json\",\"contentVersion\":\"1.0.0.0\"},\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite16772\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost22452\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Standard\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2016-02-17T19:48:44.9622788Z\",\"duration\":\"PT1.1128707S\",\"correlationId\":\"473ac592-7f73-49bf-9aa9-9e1df551caca\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost22452\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite16772\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/Sites/xDeploymentTestSite16772\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite16772\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite16772/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost22452\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost22452-xDeploymentTestGroup2125\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost22452-xDeploymentTestGroup2125\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite16772\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite16772\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite16772\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite16772\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite16772\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite16772\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost22452\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost22452\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost22452\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/serverfarms/xDeploymentTestHost22452\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost22452\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost22452\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost22452\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/Microsoft.Web/sites/xDeploymentTestSite16772\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite16772\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup2125/providers/microsoft.insights/components/xDeploymentTestSite16772\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite16772\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup2125/providers/Microsoft.Resources/deployments/Deploy18755/operationStatuses/08587458683616283520?api-version=2015-11-01',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '473ac592-7f73-49bf-9aa9-9e1df551caca',
  'x-ms-correlation-request-id': '473ac592-7f73-49bf-9aa9-9e1df551caca',
  'x-ms-routing-request-id': 'CENTRALUS:20160217T194845Z:473ac592-7f73-49bf-9aa9-9e1df551caca',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 19:48:45 GMT',
  'content-length': '5501' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup2125/providers/Microsoft.Resources/deployments/Deploy18755/cancel?api-version=2015-11-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '54b84b8c-d794-4201-b7c3-3e72e6e302c1',
  'x-ms-correlation-request-id': '54b84b8c-d794-4201-b7c3-3e72e6e302c1',
  'x-ms-routing-request-id': 'CENTRALUS:20160217T194846Z:54b84b8c-d794-4201-b7c3-3e72e6e302c1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 19:48:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup2125?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDIxMjUtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '4d006acb-b30e-4b8c-a03f-09327e4cf4a4',
  'x-ms-correlation-request-id': '4d006acb-b30e-4b8c-a03f-09327e4cf4a4',
  'x-ms-routing-request-id': 'CENTRALUS:20160217T194848Z:4d006acb-b30e-4b8c-a03f-09327e4cf4a4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 19:48:47 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDIxMjUtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2015-11-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDIxMjUtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2015-11-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '919ad3d3-5417-47e3-99d3-c6eba151a91f',
  'x-ms-correlation-request-id': '919ad3d3-5417-47e3-99d3-c6eba151a91f',
  'x-ms-routing-request-id': 'WESTUS:20160217T194919Z:919ad3d3-5417-47e3-99d3-c6eba151a91f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 19:49:18 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDIxMjUtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2015-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-request-id': 'ec37765a-7b27-42a8-adcf-cfca7813c5b7',
  'x-ms-correlation-request-id': 'ec37765a-7b27-42a8-adcf-cfca7813c5b7',
  'x-ms-routing-request-id': 'WESTUS:20160217T194949Z:ec37765a-7b27-42a8-adcf-cfca7813c5b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 19:49:48 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xDeploymentTestSite16772','xDeploymentTestHost22452','xDeploymentTestGroup2125','Deploy18755'];};