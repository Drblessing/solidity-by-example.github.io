// metadata
export const version = "0.8.17"
export const title = "Upgradeable Proxy"
export const description = "Example of upgradeable proxy"

export const keywords = [
    "app",
    "application",
    "delegatecall",
    "upgradeable",
    "proxy",
]

export const codes = [
    {
        fileName: "UpgradeableProxy.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCi8vIFRyYW5zcGFyZW50IHVwZ3JhZGVhYmxlIHByb3h5IHBhdHRlcm4KCmNvbnRyYWN0IENvdW50ZXJWMSB7CiAgICB1aW50IHB1YmxpYyBjb3VudDsKCiAgICBmdW5jdGlvbiBpbmMoKSBleHRlcm5hbCB7CiAgICAgICAgY291bnQgKz0gMTsKICAgIH0KfQoKY29udHJhY3QgQ291bnRlclYyIHsKICAgIHVpbnQgcHVibGljIGNvdW50OwoKICAgIGZ1bmN0aW9uIGluYygpIGV4dGVybmFsIHsKICAgICAgICBjb3VudCArPSAxOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlYygpIGV4dGVybmFsIHsKICAgICAgICBjb3VudCAtPSAxOwogICAgfQp9Cgpjb250cmFjdCBCdWdneVByb3h5IHsKICAgIGFkZHJlc3MgcHVibGljIGltcGxlbWVudGF0aW9uOwogICAgYWRkcmVzcyBwdWJsaWMgYWRtaW47CgogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgYWRtaW4gPSBtc2cuc2VuZGVyOwogICAgfQoKICAgIGZ1bmN0aW9uIF9kZWxlZ2F0ZSgpIHByaXZhdGUgewogICAgICAgIChib29sIG9rLCkgPSBpbXBsZW1lbnRhdGlvbi5kZWxlZ2F0ZWNhbGwobXNnLmRhdGEpOwogICAgICAgIHJlcXVpcmUob2ssICJkZWxlZ2F0ZWNhbGwgZmFpbGVkIik7CiAgICB9CgogICAgZmFsbGJhY2soKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICBfZGVsZWdhdGUoKTsKICAgIH0KCiAgICByZWNlaXZlKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgX2RlbGVnYXRlKCk7CiAgICB9CgogICAgZnVuY3Rpb24gdXBncmFkZVRvKGFkZHJlc3MgX2ltcGxlbWVudGF0aW9uKSBleHRlcm5hbCB7CiAgICAgICAgcmVxdWlyZShtc2cuc2VuZGVyID09IGFkbWluLCAibm90IGF1dGhvcml6ZWQiKTsKICAgICAgICBpbXBsZW1lbnRhdGlvbiA9IF9pbXBsZW1lbnRhdGlvbjsKICAgIH0KfQoKY29udHJhY3QgRGV2IHsKICAgIGZ1bmN0aW9uIHNlbGVjdG9ycygpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYnl0ZXM0LCBieXRlczQsIGJ5dGVzNCkgewogICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIFByb3h5LmFkbWluLnNlbGVjdG9yLAogICAgICAgICAgICBQcm94eS5pbXBsZW1lbnRhdGlvbi5zZWxlY3RvciwKICAgICAgICAgICAgUHJveHkudXBncmFkZVRvLnNlbGVjdG9yCiAgICAgICAgKTsKICAgIH0KfQoKY29udHJhY3QgUHJveHkgewogICAgLy8gQWxsIGZ1bmN0aW9ucyAvIHZhcmlhYmxlcyBzaG91bGQgYmUgcHJpdmF0ZSwgZm9yd2FyZCBhbGwgY2FsbHMgdG8gZmFsbGJhY2sKCiAgICAvLyAtMSBmb3IgdW5rbm93biBwcmVpbWFnZQogICAgLy8gMHgzNjA4OTRhMTNiYTFhMzIxMDY2N2M4Mjg0OTJkYjk4ZGNhM2UyMDc2Y2MzNzM1YTkyMGEzY2E1MDVkMzgyYmJjCiAgICBieXRlczMyIHByaXZhdGUgY29uc3RhbnQgSU1QTEVNRU5UQVRJT05fU0xPVCA9CiAgICAgICAgYnl0ZXMzMih1aW50KGtlY2NhazI1NigiZWlwMTk2Ny5wcm94eS5pbXBsZW1lbnRhdGlvbiIpKSAtIDEpOwogICAgLy8gMHhiNTMxMjc2ODRhNTY4YjMxNzNhZTEzYjlmOGE2MDE2ZTI0M2U2M2I2ZThlZTExNzhkNmE3MTc4NTBiNWQ2MTAzCiAgICBieXRlczMyIHByaXZhdGUgY29uc3RhbnQgQURNSU5fU0xPVCA9CiAgICAgICAgYnl0ZXMzMih1aW50KGtlY2NhazI1NigiZWlwMTk2Ny5wcm94eS5hZG1pbiIpKSAtIDEpOwoKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICAgIF9zZXRBZG1pbihtc2cuc2VuZGVyKTsKICAgIH0KCiAgICBtb2RpZmllciBpZkFkbWluKCkgewogICAgICAgIGlmIChtc2cuc2VuZGVyID09IF9nZXRBZG1pbigpKSB7CiAgICAgICAgICAgIF87CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgX2ZhbGxiYWNrKCk7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIF9nZXRBZG1pbigpIHByaXZhdGUgdmlldyByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgcmV0dXJuIFN0b3JhZ2VTbG90LmdldEFkZHJlc3NTbG90KEFETUlOX1NMT1QpLnZhbHVlOwogICAgfQoKICAgIGZ1bmN0aW9uIF9zZXRBZG1pbihhZGRyZXNzIF9hZG1pbikgcHJpdmF0ZSB7CiAgICAgICAgcmVxdWlyZShfYWRtaW4gIT0gYWRkcmVzcygwKSwgImFkbWluID0gemVybyBhZGRyZXNzIik7CiAgICAgICAgU3RvcmFnZVNsb3QuZ2V0QWRkcmVzc1Nsb3QoQURNSU5fU0xPVCkudmFsdWUgPSBfYWRtaW47CiAgICB9CgogICAgZnVuY3Rpb24gX2dldEltcGxlbWVudGF0aW9uKCkgcHJpdmF0ZSB2aWV3IHJldHVybnMgKGFkZHJlc3MpIHsKICAgICAgICByZXR1cm4gU3RvcmFnZVNsb3QuZ2V0QWRkcmVzc1Nsb3QoSU1QTEVNRU5UQVRJT05fU0xPVCkudmFsdWU7CiAgICB9CgogICAgZnVuY3Rpb24gX3NldEltcGxlbWVudGF0aW9uKGFkZHJlc3MgX2ltcGxlbWVudGF0aW9uKSBwcml2YXRlIHsKICAgICAgICByZXF1aXJlKF9pbXBsZW1lbnRhdGlvbi5jb2RlLmxlbmd0aCA+IDAsICJpbXBsZW1lbnRhdGlvbiBpcyBub3QgY29udHJhY3QiKTsKICAgICAgICBTdG9yYWdlU2xvdC5nZXRBZGRyZXNzU2xvdChJTVBMRU1FTlRBVElPTl9TTE9UKS52YWx1ZSA9IF9pbXBsZW1lbnRhdGlvbjsKICAgIH0KCiAgICAvLyBBZG1pbiBpbnRlcmZhY2UgLy8KICAgIGZ1bmN0aW9uIGNoYW5nZUFkbWluKGFkZHJlc3MgX2FkbWluKSBleHRlcm5hbCBpZkFkbWluIHsKICAgICAgICBfc2V0QWRtaW4oX2FkbWluKTsKICAgIH0KCiAgICAvLyAweDM2NTljZmU2CiAgICBmdW5jdGlvbiB1cGdyYWRlVG8oYWRkcmVzcyBfaW1wbGVtZW50YXRpb24pIGV4dGVybmFsIGlmQWRtaW4gewogICAgICAgIF9zZXRJbXBsZW1lbnRhdGlvbihfaW1wbGVtZW50YXRpb24pOwogICAgfQoKICAgIC8vIDB4Zjg1MWE0NDAKICAgIGZ1bmN0aW9uIGFkbWluKCkgZXh0ZXJuYWwgaWZBZG1pbiByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgcmV0dXJuIF9nZXRBZG1pbigpOwogICAgfQoKICAgIC8vIDB4NWM2MGRhMWIKICAgIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9uKCkgZXh0ZXJuYWwgaWZBZG1pbiByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgcmV0dXJuIF9nZXRJbXBsZW1lbnRhdGlvbigpOwogICAgfQoKICAgIC8vIFVzZXIgaW50ZXJmYWNlIC8vCiAgICBmdW5jdGlvbiBfZGVsZWdhdGUoYWRkcmVzcyBfaW1wbGVtZW50YXRpb24pIGludGVybmFsIHZpcnR1YWwgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gQ29weSBtc2cuZGF0YS4gV2UgdGFrZSBmdWxsIGNvbnRyb2wgb2YgbWVtb3J5IGluIHRoaXMgaW5saW5lIGFzc2VtYmx5CiAgICAgICAgICAgIC8vIGJsb2NrIGJlY2F1c2UgaXQgd2lsbCBub3QgcmV0dXJuIHRvIFNvbGlkaXR5IGNvZGUuIFdlIG92ZXJ3cml0ZSB0aGUKICAgICAgICAgICAgLy8gU29saWRpdHkgc2NyYXRjaCBwYWQgYXQgbWVtb3J5IHBvc2l0aW9uIDAuCgogICAgICAgICAgICAvLyBjYWxsZGF0YWNvcHkodCwgZiwgcykgLSBjb3B5IHMgYnl0ZXMgZnJvbSBjYWxsZGF0YSBhdCBwb3NpdGlvbiBmIHRvIG1lbSBhdCBwb3NpdGlvbiB0CiAgICAgICAgICAgIC8vIGNhbGxkYXRhc2l6ZSgpIC0gc2l6ZSBvZiBjYWxsIGRhdGEgaW4gYnl0ZXMKICAgICAgICAgICAgY2FsbGRhdGFjb3B5KDAsIDAsIGNhbGxkYXRhc2l6ZSgpKQoKICAgICAgICAgICAgLy8gQ2FsbCB0aGUgaW1wbGVtZW50YXRpb24uCiAgICAgICAgICAgIC8vIG91dCBhbmQgb3V0c2l6ZSBhcmUgMCBiZWNhdXNlIHdlIGRvbid0IGtub3cgdGhlIHNpemUgeWV0LgoKICAgICAgICAgICAgLy8gZGVsZWdhdGVjYWxsKGcsIGEsIGluLCBpbnNpemUsIG91dCwgb3V0c2l6ZSkgLQogICAgICAgICAgICAvLyAtIGNhbGwgY29udHJhY3QgYXQgYWRkcmVzcyBhCiAgICAgICAgICAgIC8vIC0gd2l0aCBpbnB1dCBtZW1baW7igKYoaW4raW5zaXplKSkKICAgICAgICAgICAgLy8gLSBwcm92aWRpbmcgZyBnYXMKICAgICAgICAgICAgLy8gLSBhbmQgb3V0cHV0IGFyZWEgbWVtW291dOKApihvdXQrb3V0c2l6ZSkpCiAgICAgICAgICAgIC8vIC0gcmV0dXJuaW5nIDAgb24gZXJyb3IgKGVnLiBvdXQgb2YgZ2FzKSBhbmQgMSBvbiBzdWNjZXNzCiAgICAgICAgICAgIGxldCByZXN1bHQgOj0gZGVsZWdhdGVjYWxsKGdhcygpLCBfaW1wbGVtZW50YXRpb24sIDAsIGNhbGxkYXRhc2l6ZSgpLCAwLCAwKQoKICAgICAgICAgICAgLy8gQ29weSB0aGUgcmV0dXJuZWQgZGF0YS4KICAgICAgICAgICAgLy8gcmV0dXJuZGF0YWNvcHkodCwgZiwgcykgLSBjb3B5IHMgYnl0ZXMgZnJvbSByZXR1cm5kYXRhIGF0IHBvc2l0aW9uIGYgdG8gbWVtIGF0IHBvc2l0aW9uIHQKICAgICAgICAgICAgLy8gcmV0dXJuZGF0YXNpemUoKSAtIHNpemUgb2YgdGhlIGxhc3QgcmV0dXJuZGF0YQogICAgICAgICAgICByZXR1cm5kYXRhY29weSgwLCAwLCByZXR1cm5kYXRhc2l6ZSgpKQoKICAgICAgICAgICAgc3dpdGNoIHJlc3VsdAogICAgICAgICAgICAvLyBkZWxlZ2F0ZWNhbGwgcmV0dXJucyAwIG9uIGVycm9yLgogICAgICAgICAgICBjYXNlIDAgewogICAgICAgICAgICAgICAgLy8gcmV2ZXJ0KHAsIHMpIC0gZW5kIGV4ZWN1dGlvbiwgcmV2ZXJ0IHN0YXRlIGNoYW5nZXMsIHJldHVybiBkYXRhIG1lbVtw4oCmKHArcykpCiAgICAgICAgICAgICAgICByZXZlcnQoMCwgcmV0dXJuZGF0YXNpemUoKSkKICAgICAgICAgICAgfQogICAgICAgICAgICBkZWZhdWx0IHsKICAgICAgICAgICAgICAgIC8vIHJldHVybihwLCBzKSAtIGVuZCBleGVjdXRpb24sIHJldHVybiBkYXRhIG1lbVtw4oCmKHArcykpCiAgICAgICAgICAgICAgICByZXR1cm4oMCwgcmV0dXJuZGF0YXNpemUoKSkKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBfZmFsbGJhY2soKSBwcml2YXRlIHsKICAgICAgICBfZGVsZWdhdGUoX2dldEltcGxlbWVudGF0aW9uKCkpOwogICAgfQoKICAgIGZhbGxiYWNrKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgX2ZhbGxiYWNrKCk7CiAgICB9CgogICAgcmVjZWl2ZSgpIGV4dGVybmFsIHBheWFibGUgewogICAgICAgIF9mYWxsYmFjaygpOwogICAgfQp9Cgpjb250cmFjdCBQcm94eUFkbWluIHsKICAgIGFkZHJlc3MgcHVibGljIG93bmVyOwoKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICAgIG93bmVyID0gbXNnLnNlbmRlcjsKICAgIH0KCiAgICBtb2RpZmllciBvbmx5T3duZXIoKSB7CiAgICAgICAgcmVxdWlyZShtc2cuc2VuZGVyID09IG93bmVyLCAibm90IG93bmVyIik7CiAgICAgICAgXzsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRQcm94eUFkbWluKGFkZHJlc3MgcHJveHkpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYWRkcmVzcykgewogICAgICAgIChib29sIG9rLCBieXRlcyBtZW1vcnkgcmVzKSA9IHByb3h5LnN0YXRpY2NhbGwoYWJpLmVuY29kZUNhbGwoUHJveHkuYWRtaW4sICgpKSk7CiAgICAgICAgcmVxdWlyZShvaywgImNhbGwgZmFpbGVkIik7CiAgICAgICAgcmV0dXJuIGFiaS5kZWNvZGUocmVzLCAoYWRkcmVzcykpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldFByb3h5SW1wbGVtZW50YXRpb24oYWRkcmVzcyBwcm94eSkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgKGJvb2wgb2ssIGJ5dGVzIG1lbW9yeSByZXMpID0gcHJveHkuc3RhdGljY2FsbCgKICAgICAgICAgICAgYWJpLmVuY29kZUNhbGwoUHJveHkuaW1wbGVtZW50YXRpb24sICgpKQogICAgICAgICk7CiAgICAgICAgcmVxdWlyZShvaywgImNhbGwgZmFpbGVkIik7CiAgICAgICAgcmV0dXJuIGFiaS5kZWNvZGUocmVzLCAoYWRkcmVzcykpOwogICAgfQoKICAgIGZ1bmN0aW9uIGNoYW5nZVByb3h5QWRtaW4oYWRkcmVzcyBwYXlhYmxlIHByb3h5LCBhZGRyZXNzIGFkbWluKSBleHRlcm5hbCBvbmx5T3duZXIgewogICAgICAgIFByb3h5KHByb3h5KS5jaGFuZ2VBZG1pbihhZG1pbik7CiAgICB9CgogICAgZnVuY3Rpb24gdXBncmFkZShhZGRyZXNzIHBheWFibGUgcHJveHksIGFkZHJlc3MgaW1wbGVtZW50YXRpb24pIGV4dGVybmFsIG9ubHlPd25lciB7CiAgICAgICAgUHJveHkocHJveHkpLnVwZ3JhZGVUbyhpbXBsZW1lbnRhdGlvbik7CiAgICB9Cn0KCmxpYnJhcnkgU3RvcmFnZVNsb3QgewogICAgc3RydWN0IEFkZHJlc3NTbG90IHsKICAgICAgICBhZGRyZXNzIHZhbHVlOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldEFkZHJlc3NTbG90KAogICAgICAgIGJ5dGVzMzIgc2xvdAogICAgKSBpbnRlcm5hbCBwdXJlIHJldHVybnMgKEFkZHJlc3NTbG90IHN0b3JhZ2UgcikgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgci5zbG90IDo9IHNsb3QKICAgICAgICB9CiAgICB9Cn0KCmNvbnRyYWN0IFRlc3RTbG90IHsKICAgIGJ5dGVzMzIgcHVibGljIGNvbnN0YW50IHNsb3QgPSBrZWNjYWsyNTYoIlRFU1RfU0xPVCIpOwoKICAgIGZ1bmN0aW9uIGdldFNsb3QoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGFkZHJlc3MpIHsKICAgICAgICByZXR1cm4gU3RvcmFnZVNsb3QuZ2V0QWRkcmVzc1Nsb3Qoc2xvdCkudmFsdWU7CiAgICB9CgogICAgZnVuY3Rpb24gd3JpdGVTbG90KGFkZHJlc3MgX2FkZHIpIGV4dGVybmFsIHsKICAgICAgICBTdG9yYWdlU2xvdC5nZXRBZGRyZXNzU2xvdChzbG90KS52YWx1ZSA9IF9hZGRyOwogICAgfQp9Cg==",
    },
]

const html = `<p>Example of upgradeable proxy contract. Never use this in production.</p>
<p>This example shows</p>
<ul>
<li>how to use <code>delegatecall</code> and return data when <code>fallback</code> is called.</li>
<li>how to store address of <code>admin</code> and <code>implementation</code> in a specific slot.</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-comment">// Transparent upgradeable proxy pattern</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CounterV1</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CounterV2</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">dec</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        count <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">BuggyProxy</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> implementation;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> admin;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        admin <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_delegate</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        (<span class="hljs-keyword">bool</span> ok,) <span class="hljs-operator">=</span> implementation.<span class="hljs-built_in">delegatecall</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">data</span>);
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"delegatecall failed"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        _delegate();
    }

    <span class="hljs-function"><span class="hljs-keyword">receive</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        _delegate();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">upgradeTo</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _implementation</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> admin, <span class="hljs-string">"not authorized"</span>);
        implementation <span class="hljs-operator">=</span> _implementation;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Dev</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">selectors</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, <span class="hljs-keyword">bytes4</span>, <span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">return</span> (
            Proxy.admin.<span class="hljs-built_in">selector</span>,
            Proxy.implementation.<span class="hljs-built_in">selector</span>,
            Proxy.upgradeTo.<span class="hljs-built_in">selector</span>
        );
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Proxy</span> </span>{
    <span class="hljs-comment">// All functions / variables should be private, forward all calls to fallback</span>

    <span class="hljs-comment">// -1 for unknown preimage</span>
    <span class="hljs-comment">// 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc</span>
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> IMPLEMENTATION_SLOT <span class="hljs-operator">=</span>
        <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"eip1967.proxy.implementation"</span>)) <span class="hljs-operator">-</span> <span class="hljs-number">1</span>);
    <span class="hljs-comment">// 0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103</span>
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> ADMIN_SLOT <span class="hljs-operator">=</span>
        <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"eip1967.proxy.admin"</span>)) <span class="hljs-operator">-</span> <span class="hljs-number">1</span>);

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        _setAdmin(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">ifAdmin</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _getAdmin()) {
            <span class="hljs-keyword">_</span>;
        } <span class="hljs-keyword">else</span> {
            _fallback();
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getAdmin</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> StorageSlot.getAddressSlot(ADMIN_SLOT).<span class="hljs-built_in">value</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_setAdmin</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _admin</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        <span class="hljs-built_in">require</span>(_admin <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"admin = zero address"</span>);
        StorageSlot.getAddressSlot(ADMIN_SLOT).<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span> _admin;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getImplementation</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).<span class="hljs-built_in">value</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_setImplementation</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _implementation</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        <span class="hljs-built_in">require</span>(_implementation.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"implementation is not contract"</span>);
        StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span> _implementation;
    }

    <span class="hljs-comment">// Admin interface //</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">changeAdmin</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _admin</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">ifAdmin</span> </span>{
        _setAdmin(_admin);
    }

    <span class="hljs-comment">// 0x3659cfe6</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">upgradeTo</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _implementation</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">ifAdmin</span> </span>{
        _setImplementation(_implementation);
    }

    <span class="hljs-comment">// 0xf851a440</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">admin</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">ifAdmin</span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> _getAdmin();
    }

    <span class="hljs-comment">// 0x5c60da1b</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">implementation</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">ifAdmin</span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> _getImplementation();
    }

    <span class="hljs-comment">// User interface //</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_delegate</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _implementation</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// Copy msg.data. We take full control of memory in this inline assembly</span>
            <span class="hljs-comment">// block because it will not return to Solidity code. We overwrite the</span>
            <span class="hljs-comment">// Solidity scratch pad at memory position 0.</span>

            <span class="hljs-comment">// calldatacopy(t, f, s) - copy s bytes from calldata at position f to mem at position t</span>
            <span class="hljs-comment">// calldatasize() - size of call data in bytes</span>
            <span class="hljs-built_in">calldatacopy</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-built_in">calldatasize</span>())

            <span class="hljs-comment">// Call the implementation.</span>
            <span class="hljs-comment">// out and outsize are 0 because we don&#x27;t know the size yet.</span>

            <span class="hljs-comment">// delegatecall(g, a, in, insize, out, outsize) -</span>
            <span class="hljs-comment">// - call contract at address a</span>
            <span class="hljs-comment">// - with input mem[in…(in+insize))</span>
            <span class="hljs-comment">// - providing g gas</span>
            <span class="hljs-comment">// - and output area mem[out…(out+outsize))</span>
            <span class="hljs-comment">// - returning 0 on error (eg. out of gas) and 1 on success</span>
            <span class="hljs-keyword">let</span> result <span class="hljs-operator">:=</span> <span class="hljs-built_in">delegatecall</span>(<span class="hljs-built_in">gas</span>(), _implementation, <span class="hljs-number">0</span>, <span class="hljs-built_in">calldatasize</span>(), <span class="hljs-number">0</span>, <span class="hljs-number">0</span>)

            <span class="hljs-comment">// Copy the returned data.</span>
            <span class="hljs-comment">// returndatacopy(t, f, s) - copy s bytes from returndata at position f to mem at position t</span>
            <span class="hljs-comment">// returndatasize() - size of the last returndata</span>
            <span class="hljs-built_in">returndatacopy</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-built_in">returndatasize</span>())

            <span class="hljs-keyword">switch</span> result
            <span class="hljs-comment">// delegatecall returns 0 on error.</span>
            <span class="hljs-keyword">case</span> <span class="hljs-number">0</span> {
                <span class="hljs-comment">// revert(p, s) - end execution, revert state changes, return data mem[p…(p+s))</span>
                <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">returndatasize</span>())
            }
            <span class="hljs-keyword">default</span> {
                <span class="hljs-comment">// return(p, s) - end execution, return data mem[p…(p+s))</span>
                <span class="hljs-keyword">return</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">returndatasize</span>())
            }
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        _delegate(_getImplementation());
    }

    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        _fallback();
    }

    <span class="hljs-function"><span class="hljs-keyword">receive</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        _fallback();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ProxyAdmin</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">onlyOwner</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner, <span class="hljs-string">"not owner"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getProxyAdmin</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> proxy</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span> proxy.<span class="hljs-built_in">staticcall</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(Proxy.admin, ()));
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"call failed"</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(res, (<span class="hljs-keyword">address</span>));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getProxyImplementation</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> proxy</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span> proxy.<span class="hljs-built_in">staticcall</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(Proxy.implementation, ())
        );
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"call failed"</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(res, (<span class="hljs-keyword">address</span>));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">changeProxyAdmin</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> proxy, <span class="hljs-keyword">address</span> admin</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">onlyOwner</span> </span>{
        Proxy(proxy).changeAdmin(admin);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">upgrade</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> proxy, <span class="hljs-keyword">address</span> implementation</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">onlyOwner</span> </span>{
        Proxy(proxy).upgradeTo(implementation);
    }
}

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">StorageSlot</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">AddressSlot</span> {
        <span class="hljs-keyword">address</span> value;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getAddressSlot</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes32</span> slot
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">AddressSlot <span class="hljs-keyword">storage</span> r</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            r.<span class="hljs-built_in">slot</span> <span class="hljs-operator">:=</span> slot
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestSlot</span> </span>{
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> slot <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"TEST_SLOT"</span>);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getSlot</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> StorageSlot.getAddressSlot(slot).<span class="hljs-built_in">value</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">writeSlot</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        StorageSlot.getAddressSlot(slot).<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span> _addr;
    }
}
</code></pre>
`

export default html
