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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuaWZlc3QteWFtbC1sYW5ndWFnZS1jbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvbWFuaWZlc3QteWFtbC1sYW5ndWFnZS1jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFDN0IsNEZBQXVGO0FBR3ZGLGdDQUF3QyxTQUFRLHVEQUF5QjtJQUVyRTtRQUNJLDBCQUEwQjtRQUMxQixLQUFLLENBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUNwQyxpQ0FBaUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxnQkFBZ0I7UUFDWixNQUFNLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCxlQUFlO1FBQ1gsTUFBTSxDQUFDLGVBQWUsQ0FBQTtJQUMxQixDQUFDO0lBRUQsYUFBYTtRQUNULE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQTtJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNKLGdGQUFnRjtRQUNoRixPQUFPLENBQUMsbUJBQW1CLENBQUM7YUFDdkIsT0FBTyxDQUFDLGtCQUFrQixDQUFDO2FBQzNCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztRQUN6RSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFRO1FBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ25CLG9EQUFvRDtZQUNwRCxnREFBZ0Q7U0FDbkQsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBdENELGdFQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBKYXZhUHJvY2Vzc0xhbmd1YWdlQ2xpZW50IH0gZnJvbSAnQHBpdm90YWwtdG9vbHMvYXRvbS1sYW5ndWFnZWNsaWVudC1jb21tb25zJztcbmltcG9ydCB7SlZNfSBmcm9tICdAcGl2b3RhbC10b29scy9qdm0tbGF1bmNoLXV0aWxzJztcblxuZXhwb3J0IGNsYXNzIE1hbmlmZXN0WWFtbExhbmd1YWdlQ2xpZW50IGV4dGVuZHMgSmF2YVByb2Nlc3NMYW5ndWFnZUNsaWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNBbm5vdGF0b3JcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnc2VydmVyJyksXG4gICAgICAgICAgICAnY2YtbWFuaWZlc3QtbGFuZ3VhZ2Utc2VydmVyLmphcidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRHcmFtbWFyU2NvcGVzKCkge1xuICAgICAgICByZXR1cm4gWydzb3VyY2UuY2YtbWFuaWZlc3QteWFtbCddXG4gICAgfVxuXG4gICAgZ2V0TGFuZ3VhZ2VOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ01hbmlmZXN0LVlBTUwnXG4gICAgfVxuXG4gICAgZ2V0U2VydmVyTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdDRiBNYW5pZmVzdCBZQU1MJ1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICAvLyByZXBsYWNlIHRoZSBleGFtcGxlIGFyZ3VtZW50ICdsaW50ZXItcnVieScgd2l0aCB0aGUgbmFtZSBvZiB0aGlzIEF0b20gcGFja2FnZVxuICAgICAgICByZXF1aXJlKCdhdG9tLXBhY2thZ2UtZGVwcycpXG4gICAgICAgICAgICAuaW5zdGFsbCgnY2YtbWFuaWZlc3QteWFtbCcpXG4gICAgICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmRlYnVnKCdBbGwgZGVwZW5kZW5jaWVzIGluc3RhbGxlZCwgZ29vZCB0byBnbycpKTtcbiAgICAgICAgc3VwZXIuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBsYXVuY2hWbUFyZ3MoanZtOiBKVk0pIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXG4gICAgICAgICAgICAnLURvcmcuc2xmNGouc2ltcGxlTG9nZ2VyLmxvZ0ZpbGU9bWFuaWZlc3QteWFtbC5sb2cnLFxuICAgICAgICAgICAgJy1Eb3JnLnNsZjRqLnNpbXBsZUxvZ2dlci5kZWZhdWx0TG9nTGV2ZWw9ZGVidWcnLFxuICAgICAgICBdKTtcblxuICAgIH1cblxufSJdfQ==