
var ApiGen = ApiGen || {};
ApiGen.elements = [["c","Akamai\\Open\\EdgeGrid\\Authentication"],["p","Akamai\\Open\\EdgeGrid\\Authentication::$auth"],["p","Akamai\\Open\\EdgeGrid\\Authentication::$config"],["p","Akamai\\Open\\EdgeGrid\\Authentication::$headers_to_sign"],["p","Akamai\\Open\\EdgeGrid\\Authentication::$host"],["p","Akamai\\Open\\EdgeGrid\\Authentication::$httpMethod"],["p","Akamai\\Open\\EdgeGrid\\Authentication::$max_body_size"],["p","Akamai\\Open\\EdgeGrid\\Authentication::$nonce"],["p","Akamai\\Open\\EdgeGrid\\Authentication::$path"],["p","Akamai\\Open\\EdgeGrid\\Authentication::$timestamp"],["m","Akamai\\Open\\EdgeGrid\\Authentication::buildQueryString()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::canonicalizeHeaders()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::createAuthHeader()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::createFromEdgeRcFile()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::getBody()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::getConfig()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::getHeaders()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::getHost()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::getHttpMethod()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::getPath()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::getQuery()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::makeBase64HmacSha256()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::makeBase64Sha256()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::makeContentHash()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::makeDataToSign()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::makeSigningKey()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::parseEdgeRcFile()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::setAuth()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::setBody()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::setConfig()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::setHeaders()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::setHeadersToSign()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::setHost()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::setHttpMethod()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::setMaxBodySize()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::setNonce()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::setPath()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::setQuery()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::setTimestamp()"],["m","Akamai\\Open\\EdgeGrid\\Authentication::signRequest()"],["c","Akamai\\Open\\EdgeGrid\\Authentication\\Exception"],["c","Akamai\\Open\\EdgeGrid\\Authentication\\Exception\\ConfigException"],["c","Akamai\\Open\\EdgeGrid\\Authentication\\Exception\\SignerException"],["c","Akamai\\Open\\EdgeGrid\\Authentication\\Exception\\SignerException\\InvalidSignDataException"],["c","Akamai\\Open\\EdgeGrid\\Authentication\\Nonce"],["p","Akamai\\Open\\EdgeGrid\\Authentication\\Nonce::$function"],["m","Akamai\\Open\\EdgeGrid\\Authentication\\Nonce::__construct()"],["m","Akamai\\Open\\EdgeGrid\\Authentication\\Nonce::__toString()"],["c","Akamai\\Open\\EdgeGrid\\Authentication\\Timestamp"],["p","Akamai\\Open\\EdgeGrid\\Authentication\\Timestamp::$timestamp"],["p","Akamai\\Open\\EdgeGrid\\Authentication\\Timestamp::$validFor"],["m","Akamai\\Open\\EdgeGrid\\Authentication\\Timestamp::__construct()"],["m","Akamai\\Open\\EdgeGrid\\Authentication\\Timestamp::__toString()"],["m","Akamai\\Open\\EdgeGrid\\Authentication\\Timestamp::isValid()"],["m","Akamai\\Open\\EdgeGrid\\Authentication\\Timestamp::setValidFor()"],["c","Akamai\\Open\\EdgeGrid\\Cli"],["p","Akamai\\Open\\EdgeGrid\\Cli::$climate"],["m","Akamai\\Open\\EdgeGrid\\Cli::__construct()"],["m","Akamai\\Open\\EdgeGrid\\Cli::executeCommand()"],["m","Akamai\\Open\\EdgeGrid\\Cli::getArgValue()"],["m","Akamai\\Open\\EdgeGrid\\Cli::getNamedArgs()"],["m","Akamai\\Open\\EdgeGrid\\Cli::help()"],["m","Akamai\\Open\\EdgeGrid\\Cli::parseArguments()"],["m","Akamai\\Open\\EdgeGrid\\Cli::run()"],["m","Akamai\\Open\\EdgeGrid\\Cli::version()"],["c","Akamai\\Open\\EdgeGrid\\Client"],["p","Akamai\\Open\\EdgeGrid\\Client::$authentication"],["p","Akamai\\Open\\EdgeGrid\\Client::$debug"],["p","Akamai\\Open\\EdgeGrid\\Client::$debugHandler"],["p","Akamai\\Open\\EdgeGrid\\Client::$debugOverride"],["p","Akamai\\Open\\EdgeGrid\\Client::$logger"],["p","Akamai\\Open\\EdgeGrid\\Client::$staticDebug"],["p","Akamai\\Open\\EdgeGrid\\Client::$staticVerbose"],["p","Akamai\\Open\\EdgeGrid\\Client::$verbose"],["p","Akamai\\Open\\EdgeGrid\\Client::$verboseHandler"],["p","Akamai\\Open\\EdgeGrid\\Client::$verboseOverride"],["m","Akamai\\Open\\EdgeGrid\\Client::__construct()"],["m","Akamai\\Open\\EdgeGrid\\Client::createFromEdgeRcFile()"],["m","Akamai\\Open\\EdgeGrid\\Client::getDebugOption()"],["m","Akamai\\Open\\EdgeGrid\\Client::isDebug()"],["m","Akamai\\Open\\EdgeGrid\\Client::isVerbose()"],["m","Akamai\\Open\\EdgeGrid\\Client::requestAsync()"],["m","Akamai\\Open\\EdgeGrid\\Client::sendAsync()"],["m","Akamai\\Open\\EdgeGrid\\Client::setAuth()"],["m","Akamai\\Open\\EdgeGrid\\Client::setAuthentication()"],["m","Akamai\\Open\\EdgeGrid\\Client::setAuthenticationHandler()"],["m","Akamai\\Open\\EdgeGrid\\Client::setBasicOptions()"],["m","Akamai\\Open\\EdgeGrid\\Client::setConfigOption()"],["m","Akamai\\Open\\EdgeGrid\\Client::setDebug()"],["m","Akamai\\Open\\EdgeGrid\\Client::setDebugHandler()"],["m","Akamai\\Open\\EdgeGrid\\Client::setHeadersToSign()"],["m","Akamai\\Open\\EdgeGrid\\Client::setHost()"],["m","Akamai\\Open\\EdgeGrid\\Client::setInstanceDebug()"],["m","Akamai\\Open\\EdgeGrid\\Client::setInstanceVerbose()"],["m","Akamai\\Open\\EdgeGrid\\Client::setLogger()"],["m","Akamai\\Open\\EdgeGrid\\Client::setLogHandler()"],["m","Akamai\\Open\\EdgeGrid\\Client::setMaxBodySize()"],["m","Akamai\\Open\\EdgeGrid\\Client::setRequestOptions()"],["m","Akamai\\Open\\EdgeGrid\\Client::setSimpleLog()"],["m","Akamai\\Open\\EdgeGrid\\Client::setTimeout()"],["m","Akamai\\Open\\EdgeGrid\\Client::setVerbose()"],["m","Akamai\\Open\\EdgeGrid\\Client::setVerboseHandler()"],["c","Akamai\\Open\\EdgeGrid\\Exception"],["c","Akamai\\Open\\EdgeGrid\\Exception\\HandlerException"],["c","Akamai\\Open\\EdgeGrid\\Exception\\HandlerException\\IOException"],["c","Akamai\\Open\\EdgeGrid\\Handler\\Authentication"],["p","Akamai\\Open\\EdgeGrid\\Handler\\Authentication::$signer"],["m","Akamai\\Open\\EdgeGrid\\Handler\\Authentication::__call()"],["m","Akamai\\Open\\EdgeGrid\\Handler\\Authentication::__invoke()"],["m","Akamai\\Open\\EdgeGrid\\Handler\\Authentication::createFromEdgeRcFile()"],["m","Akamai\\Open\\EdgeGrid\\Handler\\Authentication::setSigner()"],["c","Akamai\\Open\\EdgeGrid\\Handler\\Debug"],["p","Akamai\\Open\\EdgeGrid\\Handler\\Debug::$fp"],["p","Akamai\\Open\\EdgeGrid\\Handler\\Debug::$messages"],["m","Akamai\\Open\\EdgeGrid\\Handler\\Debug::__construct()"],["m","Akamai\\Open\\EdgeGrid\\Handler\\Debug::__invoke()"],["c","Akamai\\Open\\EdgeGrid\\Handler\\Verbose"],["p","Akamai\\Open\\EdgeGrid\\Handler\\Verbose::$errorStream"],["p","Akamai\\Open\\EdgeGrid\\Handler\\Verbose::$outputStream"],["m","Akamai\\Open\\EdgeGrid\\Handler\\Verbose::__construct()"],["m","Akamai\\Open\\EdgeGrid\\Handler\\Verbose::__invoke()"],["m","Akamai\\Open\\EdgeGrid\\Handler\\Verbose::getBody()"]];
