const path = require('path');
const { JarLanguageClient } = require('pivotal-atom-languageclient-commons');
const PROPERTIES = require('../properties.json');

class ManifestYamlLanguageClient extends JarLanguageClient {

    constructor() {
        //noinspection JSAnnotator
        super(
            PROPERTIES.jarUrl,
            path.join(__dirname, '..', 'server'),
            'language-server.jar'
        );
    }

    getGrammarScopes() {
        return ['source.cf-manifest-yaml']
    }

    getLanguageName() {
        return 'Manifest-YAML'
    }

    getServerName() {
        return 'CF Manifest YAML'
    }

    launchVmArgs(version) {
        return [
            '-Dlsp.yaml.completions.errors.disable=true',
            '-Xdebug',
            '-agentlib:jdwp=transport=dt_socket,address=9000,server=y,suspend=n',
            '-Dorg.slf4j.simpleLogger.logFile=manifest-yaml.log',
            '-Dorg.slf4j.simpleLogger.defaultLogLevel=debug',
        ];

    }

}

module.exports = new ManifestYamlLanguageClient();
