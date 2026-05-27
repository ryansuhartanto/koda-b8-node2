import { describe, it } from "node:test";
import assert from "node:assert";

import { processDate } from "./utils.js";

describe("processDate manual", () => {
	it("throws on empty parameter", () => {
		assert.throws(() => {
			processDate();
		});
	});

	it("throws on non string parameter", () => {
		assert.throws(() => {
			processDate(0);
		});
	});

	it("throws on badly formatted date", () => {
		assert.throws(() => {
			processDate("30122000");
		});
		assert.throws(() => {
			processDate("30/12/2000");
		});
		assert.throws(() => {
			processDate("2000-12-30");
		});
	});

	it("throws on non-existent date", () => {
		assert.throws(() => {
			processDate("32-02-2000");
		});
	});

	it("returns a string", () => {
		assert.equal(typeof processDate("30-12-2000"), "string");
	});

	it("returns a correctly formatted date", () => {
		assert.equal(processDate("30-12-2000"), "30/12/2000");
	});
});
