"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const atom_languageclient_commons_1 = require("@pivotal-tools/atom-languageclient-commons");
class ManifestYamlLanguageClient extends atom_languageclient_commons_1.JavaProcessLanguageClient {
    constructor() {
        //noinspection JSAnnotator
        super(path.join(__dirname, '..', 'server'), 'cf-manifest-language-server.jar');
    }
    getGrammarScopes() {
        return ['source.cf-manifest-yaml'];
    }
    getLanguageName() {
        return 'Manifest-YAML';
    }
    getServerName() {
        return 'CF Manifest YAML';
    }
    activate() {
        // replace the example argument 'linter-ruby' with the name of this Atom package
        require('atom-package-deps')
            .install('cf-manifest-yaml')
            .then(() => console.debug('All dependencies installed, good to go'));
        super.activate();
    }
    launchVmArgs(jvm) {
        return Promise.resolve([
            '-Dorg.slf4j.simpleLogger.logFile=manifest-yaml.log',
            '-Dorg.slf4j.simpleLogger.defaultLogLevel=debug',
        ]);
    }
}
exports.ManifestYamlLanguageClient = ManifestYamlLanguageClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuaWZlc3QteWFtbC1sYW5ndWFnZS1jbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvbWFuaWZlc3QteWFtbC1sYW5ndWFnZS1jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFDN0IsNEZBQXVGO0FBR3ZGLGdDQUF3QyxTQUFRLHVEQUF5QjtJQUVyRTtRQUNJLDBCQUEwQjtRQUMxQixLQUFLLENBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUNwQyxpQ0FBaUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxnQkFBZ0I7UUFDWixPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsZUFBZTtRQUNYLE9BQU8sZUFBZSxDQUFBO0lBQzFCLENBQUM7SUFFRCxhQUFhO1FBQ1QsT0FBTyxrQkFBa0IsQ0FBQTtJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNKLGdGQUFnRjtRQUNoRixPQUFPLENBQUMsbUJBQW1CLENBQUM7YUFDdkIsT0FBTyxDQUFDLGtCQUFrQixDQUFDO2FBQzNCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztRQUN6RSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFRO1FBQ2pCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNuQixvREFBb0Q7WUFDcEQsZ0RBQWdEO1NBQ25ELENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQXRDRCxnRUFzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgSmF2YVByb2Nlc3NMYW5ndWFnZUNsaWVudCB9IGZyb20gJ0BwaXZvdGFsLXRvb2xzL2F0b20tbGFuZ3VhZ2VjbGllbnQtY29tbW9ucyc7XG5pbXBvcnQge0pWTX0gZnJvbSAnQHBpdm90YWwtdG9vbHMvanZtLWxhdW5jaC11dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBNYW5pZmVzdFlhbWxMYW5ndWFnZUNsaWVudCBleHRlbmRzIEphdmFQcm9jZXNzTGFuZ3VhZ2VDbGllbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTQW5ub3RhdG9yXG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uJywgJ3NlcnZlcicpLFxuICAgICAgICAgICAgJ2NmLW1hbmlmZXN0LWxhbmd1YWdlLXNlcnZlci5qYXInXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0R3JhbW1hclNjb3BlcygpIHtcbiAgICAgICAgcmV0dXJuIFsnc291cmNlLmNmLW1hbmlmZXN0LXlhbWwnXVxuICAgIH1cblxuICAgIGdldExhbmd1YWdlTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdNYW5pZmVzdC1ZQU1MJ1xuICAgIH1cblxuICAgIGdldFNlcnZlck5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnQ0YgTWFuaWZlc3QgWUFNTCdcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgZXhhbXBsZSBhcmd1bWVudCAnbGludGVyLXJ1YnknIHdpdGggdGhlIG5hbWUgb2YgdGhpcyBBdG9tIHBhY2thZ2VcbiAgICAgICAgcmVxdWlyZSgnYXRvbS1wYWNrYWdlLWRlcHMnKVxuICAgICAgICAgICAgLmluc3RhbGwoJ2NmLW1hbmlmZXN0LXlhbWwnKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5kZWJ1ZygnQWxsIGRlcGVuZGVuY2llcyBpbnN0YWxsZWQsIGdvb2QgdG8gZ28nKSk7XG4gICAgICAgIHN1cGVyLmFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgbGF1bmNoVm1BcmdzKGp2bTogSlZNKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW1xuICAgICAgICAgICAgJy1Eb3JnLnNsZjRqLnNpbXBsZUxvZ2dlci5sb2dGaWxlPW1hbmlmZXN0LXlhbWwubG9nJyxcbiAgICAgICAgICAgICctRG9yZy5zbGY0ai5zaW1wbGVMb2dnZXIuZGVmYXVsdExvZ0xldmVsPWRlYnVnJyxcbiAgICAgICAgXSk7XG5cbiAgICB9XG5cbn0iXX0=