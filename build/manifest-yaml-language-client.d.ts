import { JavaProcessLanguageClient } from '@pivotal-tools/atom-languageclient-commons';
import { JVM } from '@pivotal-tools/jvm-launch-utils';
export declare class ManifestYamlLanguageClient extends JavaProcessLanguageClient {
    constructor();
    getGrammarScopes(): string[];
    getLanguageName(): string;
    getServerName(): string;
    activate(): void;
    launchVmArgs(jvm: JVM): Promise<string[]>;
}
