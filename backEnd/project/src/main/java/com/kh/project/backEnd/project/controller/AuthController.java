package com.kh.project.backEnd.project.controller;

import com.kh.project.backEnd.project.dto.MemberReqDto;
import com.kh.project.backEnd.project.dto.MemberResDto;
import com.kh.project.backEnd.project.dto.TokenDto;
import com.kh.project.backEnd.project.entity.Token;
import com.kh.project.backEnd.project.jwt.TokenProvider;
import com.kh.project.backEnd.project.service.AuthService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequestMapping("/auth")
@RestController
@Setter
@Getter
@ToString
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
    private final TokenProvider tokenProvider;


    @PostMapping("/sign")
    public ResponseEntity<MemberResDto> sign(@RequestBody MemberReqDto memberReqDto) {
        log.warn("memberReqDto {} :", memberReqDto);
        MemberResDto result = authService.signup(memberReqDto);
        System.out.println(result);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestBody MemberReqDto memberReqDto) {
        return ResponseEntity.ok(authService.login(memberReqDto));
    }

    // access토큰 재발급
    @GetMapping("/refresh")
    public ResponseEntity<String> refreshToken(@RequestBody String refeshToken) {
        return ResponseEntity.ok(tokenProvider.generateNewAccessToken(refeshToken));
    }
}
