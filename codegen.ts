import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "schema.graphql",
	hooks: {
		afterAllFileWrite: ["prettier --write"],
	},
	generates: {
		"graphql/generated": defineConfig({
			resolverGeneration: "disabled",
			emitLegacyCommonJSImports: false,
		}),
	},
};
export default config;
