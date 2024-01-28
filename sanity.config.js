import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  name: "default",
  title: "Sportfolio-shubh-2-build",
  projectId: "5d6p53qo",
  dataset: "production",
  basePath: "/studio",
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
